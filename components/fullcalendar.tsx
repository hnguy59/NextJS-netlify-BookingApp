import React from "react";

import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import scrollGridPlugin from "@fullcalendar/scrollgrid";
import momentPlugin from "@fullcalendar/moment";

export default class FullCalendarComponent extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };
  render() {
    return (
      <div className="full-calendar">
        <FullCalendar
          plugins={[
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            scrollGridPlugin,
            momentPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek,",
          }}
          initialView="timeGridWeek"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={this.state.weekendsVisible}
          select={this.handleDateSelect}
          eventContent={renderEventContent}
          eventClick={this.handleEventClick}
          eventsSet={this.handleEvents}
        />
      </div>
    );
  }
  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

// $("#calendar").html("yes");
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

let eventGuid = 0;
function createEventId() {
  return String(eventGuid++);
}

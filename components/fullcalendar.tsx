import React from "react";

import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";

import ReactModal from "react-modal";
import Button from "./button";

// import { events } from "../data/events";
// import { businessHours } from "../data/businessHours";
export default class FullCalendarComponent extends React.Component {
  state = {
    currentEvents: [],
    modalIsOpen: false,
  };

  handleDateSelect = (selectInfo) => {
    this.openModal();
    // let title = prompt("Please enter a new title for your event");

    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
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

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div className="full-calendar">
        <ReactModal
          className={`full-calendar__modal`}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
        >
          <div>test</div>
          <Button
            onClick={() => {
              alert("test");
            }}
          >
            Submit
          </Button>
          <Button onClick={this.closeModal.bind(this)} style="secondary">
            CLOSE
          </Button>
        </ReactModal>
        <FullCalendar
          plugins={[
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            momentPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
          }}
          initialView="timeGridWeek"
          selectable={true}
          selectMirror={false}
          unselectCancel=".modal"
          allDaySlot={true}
          // selectConstraint="court-open"
          editable={true}
          select={this.handleDateSelect}
          eventContent={renderEventContent}
          eventClick={this.handleEventClick}
          eventsSet={this.handleEvents}
        />
      </div>
    );
  }
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

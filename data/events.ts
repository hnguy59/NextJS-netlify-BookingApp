interface eventModel {
  id?: string,
  groupId?: string,
  allDay?: boolean,
  startStr?: string,
  endStr?: string,
  title?: string,
  url?: string,
  classNames?: string[],
  editable?: boolean,
  startEditable?: boolean,
  durationEditable?: boolean,
  resourceEditable?: boolean,
  display?: string,
  overlap?: boolean,
  daysOfWeek?: string[],
  color?: string
};

export let events: eventModel = {
  id: 'test',
}
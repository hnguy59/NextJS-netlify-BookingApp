interface businessHoursModel {
  daysOfWeek?: number[];
  startTime?: string;
  endTime?: string;
}

export let businessHours: businessHoursModel[] = [
  {
    // days of week. an array of zero-based day of week integers (0=Sunday)
    daysOfWeek: [1, 2, 3, 4], // Monday - Thursday

    startTime: "10:00", // a start time (10am in this example)
    endTime: "18:00", // an end time (6pm in this example)
  },
];

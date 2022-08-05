//booking.js

export let time = 9;
export let jobLength = 1;
export let currentDate = new Date('2016-05-18T11:27:00');

const availabilityData = [
  {
    "Date": "2016-05-18",
    "HoursAvailable": [9, 10, 11, 12, 13, 14, 17]
  },
  {
    "Date": "2016-05-19",
    "HoursAvailable": [9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    "Date": "2016-05-20",
    "HoursAvailable": [9, 10, 14, 15, 16, 17]
  },
  {
    "Date": "2016-05-21",
    "HoursAvailable": [9, 10, 11, 12, 13]
  },
  {
    "Date": "2016-05-23",
    "HoursAvailable": [13, 14, 15, 16]
  },
  {
    "Date": "2016-05-24",
    "HoursAvailable": [11, 12, 15, 16, 17]
  }
];

function checkSlotAvailability(time, jobLength, date, availability) {
    return "FULL";
}    

export const availabilityStatus = availabilityData.map((value, index, array) => {
  let year = new Date(value.Date).getFullYear();
  let month = new Date(value.Date).getMonth();
  let date = new Date(value.Date).getDate();
  let status = "FULL";

  if (year === currentDate.getFullYear()
    && month === currentDate.getMonth()
    && date === currentDate.getDate()) {
      status = checkSlotAvailability(time, jobLength, value.Date, value.HoursAvailable);
    }
  return status;
});


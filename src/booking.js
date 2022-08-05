//booking.js

const minJobLength = 1;
const maxJobLength = 5;
const travelBuffer = 1;
const currentDayBuffer = 2;
const fullyAvailableDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let time = 9;
let jobLength = 1;

export let currentDate = new Date('2016-05-18T11:27:00');


export const availabilityData = [
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
  if (time in availability) {
    if (date !== currentDate) {
      if ((time === fullyAvailableDay[0])
        || (time === fullyAvailableDay[fullyAvailableDay.length - 1])) {
        return "AVAILABLE";
      }
      else {
        return "FULL";
      }
    }
  }
  else {
    if (currentDate.getHours() + travelBuffer > time) {
      return "UNAVAILABLE";
    }
    else {
      return "AVAILABLE";
    }
  }
}    

export const availabilityStatus = availabilityData.map((value, index, array) => {
    let isoDate = new Date(value.Date);
    let status = fullyAvailableDay.map((_value, _index, _array) => {
        return checkSlotAvailability(time, jobLength, isoDate, value.HoursAvailable);
    });
    
    return status;
});

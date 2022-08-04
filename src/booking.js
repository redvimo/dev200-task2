const d = new Date("2016-05-18T11:27:00");
const cdn = 'http://example.com/movies.jsonhttps://techki-bucket-cos-standard-13b.s3.eu-de.cloud-object-storage.appdomain.cloud/availability.json';

console.log(d);

function checkSlotAvailability() {
    fetch(cdn)
    .then((response) => response.json())
    .then((data) => {return data});
}


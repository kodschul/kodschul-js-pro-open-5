// let event = process.argv[2];
// let eventDate = process.argv[3];

const event = "Fitness";
const eventDateStr = "2024-04-18 14:45";

const eventDate = new Date(eventDateStr);
const now = new Date();

let diffInSecs = eventDate.getTime() - now.getTime();

let damals = new Date(0);

let alt = new Date(diffInSecs);

console.log(damals);

console.log(
  alt.getDate() - damals.getDate(),
  alt.getHours() - damals.getHours(),
  alt.getMinutes() - damals.getMinutes()
);

// let dayDiff = eventDate.getDate() - now.getDate();
// let hoursDiff = eventDate.getHours() - now.getHours();

// let inXMinutes = Math.ceil(diffInSecs / 60);
// let inXHours = Math.ceil(inXMinutes / 60);
// let inXDays = Math.ceil(inXHours / 24);

// inXHours = inXHours - inXDays * 24;

// console.log({
//   inXDays,
//   inXHours: inXHours,
//   inXMinutes: inXMinutes - inXHours * 60,
// });

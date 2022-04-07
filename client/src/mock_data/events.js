export function getEventList() {
    return eventList;
}

export function getFutureEventList() {
    return eventList.filter((event) => event.start > new Date() );
}
  
export function getEventbyId(eventId) {
    return eventList.find((event) => event.eventId == eventId);
}


const eventList = [
    {eventId: 0, title: "Painting Class",  start: 1644814800000, end: 1644915600000, hexColor: "B18CE7"},
    {eventId: 1, title: "Graphic Class", start: 1644829200000, end: 1644836400000, hexColor: "B18CE7"},
    {eventId: 3, title: "Painting Class", start: 1644901200000, end: 1644904800000, hexColor: "B18CE7"},
    {eventId: 4, title: "Painting Class", start: 1644908400000, end: 1644915600000, hexColor: "B18CE7"},
    {eventId: 5, title: "Graphic Class", start: 1644919200000, end: 1644922800000, hexColor: "B18CE7"},
    {eventId: 6, title: "Master Class – Oil Painting", start: 1644926400000, end: 1644933600000, hexColor: "AEDE80"},
    {eventId: 7, title: "Painting Class", start: 1644991200000, end: 1644998400000, hexColor: "B18CE7"},
    {eventId: 8, title: "Graphic Class", start: 1645002000000, end: 1645009200000, hexColor: "B18CE7"},
    {eventId: 9, title: "20th-century Art Lecture", start: 1645012800000, end: 1645023600000, hexColor: "F6C47A"},
    {eventId: 10, title: "Graphic Class", start: 1645074000000, end: 1645077600000, hexColor: "B18CE7"},
    {eventId: 11, title: "Painting Class", start: 1645081200000, end: 1645088400000, hexColor: "B18CE7"},
    {eventId: 12, title: "Graphic Class", start: 1645092000000, end: 1645095600000, hexColor: "B18CE7"},
    {eventId: 13, title: "Master Class – Oil Painting", start: 1645099200000, end: 1645106400000, hexColor: "AEDE80"},
];
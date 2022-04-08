import { getTime } from "date-fns";

export function getEventList() {
    return eventList;
}

export function getFutureEventList() {
    return eventList.filter((event) => event.start > new Date() );
}
  
export function getEventbyId(eventId) {
    return eventList.find((event) => event.eventId == eventId);
}

export async function addEvent(eventFields) {
    let newEvent = { 
        isDeleted: false,
        eventId: eventList.length + 1,
        created: getTime(new Date()),
        updated: getTime(new Date()),
        ...eventFields
    }

    try {
        eventList.push(newEvent)
    } catch (error) {
        console.log('Error!')
    }
}

export async function updateEvent(eventId, eventFields) {
    let newEvent = { 
        ...eventFields,
        updated: getTime(new Date()),
    }

    try {
        eventList = eventList.map(event => {
            if (event.eventId == eventId) { return newEvent }
            return event
        })
    } catch (error) {
        console.log('Error!')
    }
}

export async function deleteEvent(eventId) {
    try {
        eventList = eventList.map(event => {
            if (event.eventId == eventId) { 
                return {
                    ...event,
                    updated: getTime(new Date()),
                    isDeleted: true,
                } 
            }
            return event
        })
    } catch (error) {
        console.log('Error!')
    }
}


let eventList = [
    {eventId: 1, title: "Painting Class",  start: 1644814800000, end: 1644915600000,  textColor: "#B18CE7", allDay: true, isDeleted: false, updated: 1644915600000},
    {eventId: 2, title: "Graphic Class", start: 1644829200000, end: 1644836400000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 3, title: "Painting Class", start: 1644901200000, end: 1644904800000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 4, title: "Painting Class", start: 1644908400000, end: 1644915600000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 5, title: "Graphic Class", start: 1644919200000, end: 1644922800000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 6, title: "Master Class – Oil Painting", start: 1644926400000, end: 1644933600000,  textColor: "#AEDE80", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 7, title: "Painting Class", start: 1644991200000, end: 1644998400000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 8, title: "Graphic Class", start: 1645002000000, end: 1645009200000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 9, title: "20th-century Art Lecture", start: 1645012800000, end: 1645023600000,  textColor: "#F6C47A", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 10, title: "Graphic Class", start: 1645074000000, end: 1645077600000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 11, title: "Painting Class", start: 1645081200000, end: 1645088400000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 12, title: "Graphic Class", start: 1645092000000, end: 1645095600000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {eventId: 13, title: "Master Class – Oil Painting", start: 1645099200000, end: 1645106400000,  textColor: "#AEDE80", allDay: false, isDeleted: false, updated: 1644915600000},
];
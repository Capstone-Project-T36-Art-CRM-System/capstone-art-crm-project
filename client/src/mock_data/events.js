import { getTime } from "date-fns";

export function getEventList(type) {
    if (type){
        return eventList.filter(event => event.type == type && !event.isDeleted);
    }else{
        return eventList.filter(event => !event.isDeleted);
    }
}

export function getEventbyId(eventId) {
    return eventList.find((event) => event.eventId == eventId);
}

export function getFutureEventList() {
    return eventList.filter((event) => event.start > new Date() );
}

export function addEvent(eventFields){
    let newEvent = { 
        ...eventFields,
        eventId: eventList.length + 1,
        isDeleted: false, 
        created: getTime(new Date()),
        updated: getTime(new Date()),
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
        eventId: eventId,
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
    {
        eventId: 1,
        type: "class",
        title: "Painting Class",
        price: 100,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
    },
    {
        eventId: 2,
        type: "class",
        title: "Graphic Class",
        price: 100,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
    },
    {
        eventId: 3,
        type: "class",
        title: "Master Class – Oil Painting",
        price: 200,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
    },
    {
        eventId: 4,
        type: "exhibition",
        title: "Exhibition \"Canadian Cubism\"",
        price: 20,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
    },
    {
        eventId: 5,
        type: "lecture",
        title: "20th-century Art Lecture",
        price: 40,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
    },
    {
        eventId: 6,
        type: "other",
        title: "Art Evening",
        price: 10,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
    },
];
import { getTime } from "date-fns";

export function getSchedule() {
    return eventList.map(event => event.schedule.map(scheduleItem => ({title: event.title, ...scheduleItem}))).flat(1);
}

export function getScheduledEventbyId(scheduleItemId) {
    return getSchedule().find(scheduleItem => scheduleItem.id == scheduleItemId);
}

export async function scheduleEvent(eventId, scheduleItemFields) {
    let curEvent = eventList.find(event => event.eventId == eventId);
    if (curEvent){
        let newScheduleItem = {
            id: 'E' + curEvent.eventId + 'S' + curEvent.schedule+1,
            isDeleted: false,
            eventId: eventList.length + 1,
            created: getTime(new Date()),
            updated: getTime(new Date()),
            ...scheduleItemFields
        }
        try {
            eventList.find(event => event.eventId == eventId).schedule.push(newScheduleItem)
            console.log(eventList)
        } catch (error) {
            console.log('Error!')
        }
    }else{
        return
    }
}

export function updateScheduledEvent(scheduledEventId, scheduleItemFields) {
    let newScheduleItem = { 
        ...scheduleItemFields,
        updated: getTime(new Date()),
    }

    try {
        eventList = eventList.map(event => ({
            ...event,
            schedule: event.schedule.map(scheduleItem => {
                if (scheduleItem.id == scheduledEventId) {
                    return {
                        ...newScheduleItem
                    } 
                }else{
                    return scheduleItem
                }
            })
        }))
        console.log(eventList)
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

export function deleteScheduledEvent(scheduledEventId) {
    try {
        eventList = eventList.map(event => ({
            ...event,
            schedule: event.schedule.map(scheduleItem => {
                if (scheduleItem.id == scheduledEventId) { 
                    return {
                        ...scheduleItem,
                        updated: getTime(new Date()),
                        isDeleted: true,
                    } 
                }else{
                    return scheduleItem
                }
            })
        }))
        console.log(eventList)
    } catch (error) {
        console.log('Error!')
    }
}

export function getEventList(type) {
    if (type){
        return eventList.filter(event => event.type == type);
    }else{
        return eventList;
    }
}

export function getFutureEventList() {
    return eventList.filter((event) => event.start > new Date() );
}
  
export function getEventbyId(eventId) {
    return eventList.find((event) => event.eventId == eventId);
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
        schedule: [
            {id: "E1S1", start: 1644814800000, end: 1644915600000,  textColor: "#B18CE7", allDay: true, isDeleted: false, updated: 1644915600000},
            {id: "E1S2", start: 1644901200000, end: 1644904800000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
            {id: "E1S3", start: 1644908400000, end: 1644915600000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
            {id: "E1S4", start: 1644991200000, end: 1644998400000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
        ],
    },
    {
        eventId: 2,
        type: "class",
        title: "Graphic Class",
        price: 100,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
        schedule: [
            {id: "E2S1", start: 1644829200000, end: 1644836400000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
            {id: "E2S2", start: 1644919200000, end: 1644922800000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
            {id: "E2S3", start: 1645002000000, end: 1645009200000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
        ],
    },
    {
        eventId: 3,
        type: "class",
        title: "Master Class – Oil Painting",
        price: 200,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
        schedule: [
            {id: "E3S1", start: 1644926400000, end: 1644933600000,  textColor: "#AEDE80", allDay: false, isDeleted: false, updated: 1644915600000},
        ],
    },
    {
        eventId: 4,
        type: "exhibition",
        title: "20th-century Art Exhibion",
        price: 20,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
        schedule: [
            {id: "E4S1", start: 1644926490000, end: 1644926402000,  textColor: "#AEDE80", allDay: false, isDeleted: false, updated: 1644900600000},
        ],
    },
    {
        eventId: 5,
        type: "lecture",
        title: "20th-century Art Lecture",
        price: 40,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
        schedule: [
            {id: "E5S1", start: 1645012800000, end: 1645023600000,  textColor: "#F6C47A", allDay: false, isDeleted: false, updated: 1644915600000},
        ],
    },
    {
        eventId: 33,
        type: "other",
        title: "Art Evening",
        price: 10,
        isDeleted: false, 
        created: 1644915600000,
        updated: 1644915600000,
        schedule: [
            {id: "E3S1", start: 1645012900000, end: 1645023950000,  textColor: "#F6C47A", allDay: false, isDeleted: false, updated: 1644915600000},
        ],
    },
];
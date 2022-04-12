import { getTime } from "date-fns";
import { getEventbyId } from "./events";

export function getSchedule() {
    return scheduleList.map(scheduleItem => ({title: getEventbyId(scheduleItem.eventId).title, ...scheduleItem}));
}

export function getScheduleByEventId(eventId) {
    return scheduleList.filter(scheduleItem => scheduleItem.eventId == eventId).map(scheduleItem => ({title: getEventbyId(scheduleItem.eventId).title, ...scheduleItem}));
}

export function getScheduledEventbyId(scheduleItemId) {
    return getSchedule().find(scheduleItem => scheduleItem.id == scheduleItemId);
}

export async function scheduleEvent(scheduleItemFields) {
    let newScheduleItem = {
        ...scheduleItemFields,
        id: scheduleList.length + 1,
        isDeleted: false,
        created: getTime(new Date()),
        updated: getTime(new Date()),
    }

    try {
        scheduleList.push(newScheduleItem);
    } catch (error) {
        console.log('Error!')
    }
}

export function updateScheduledEvent(scheduledEventId, scheduleItemFields) {
    let updatedFields = { 
        ...scheduleItemFields,
        updated: getTime(new Date()),
    }

    try {
        scheduleList = scheduleList.map(scheduleItem => {
            if (scheduleItem.id == scheduledEventId) { return ({ ...scheduleItem, ...updatedFields }) }
            return scheduleItem
        })
    } catch (error) {
        console.log('Error!')
    }
}

export function deleteScheduledEvent(scheduledEventId) {
    let updatedFields = { 
        isDeleted: true,
        updated: getTime(new Date()),
    }

    try {
        scheduleList = scheduleList.map(scheduleItem => {
            if (scheduleItem.id == scheduledEventId) { return ({ ...scheduleItem, ...updatedFields }) }
            return scheduleItem
        })
    } catch (error) {
        console.log('Error!')
    }
}


let scheduleList = [
    {id: 1, eventId: 1, instructorId: null, start: 1644814800000, end: 1644915600000,  textColor: "#B18CE7", allDay: true, isDeleted: false, updated: 1644915600000},
    {id: 2, eventId: 1, instructorId: null, start: 1644901200000, end: 1644904800000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 3, eventId: 1, instructorId: null, start: 1644908400000, end: 1644915600000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 4, eventId: 1, instructorId: null, start: 1644991200000, end: 1644998400000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 5, eventId: 2, instructorId: null, start: 1644829200000, end: 1644836400000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 6, eventId: 2, instructorId: null, start: 1644919200000, end: 1644922800000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 7, eventId: 2, instructorId: null, start: 1645002000000, end: 1645009200000,  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 8, eventId: 3, instructorId: null, start: 1644926400000, end: 1644933600000,  textColor: "#AEDE80", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 9, eventId: 4, instructorId: null, start: 1644926490000, end: 1644926402000,  textColor: "#AEDE80", allDay: false, isDeleted: false, updated: 1644900600000},
    {id: 10, eventId: 5, instructorId: null, start: 1645012800000, end: 1645023600000,  textColor: "#F6C47A", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 11, eventId: 6, instructorId: null, start: 1645012900000, end: 1645023950000,  textColor: "#F6C47A", allDay: false, isDeleted: false, updated: 1644915600000},
]
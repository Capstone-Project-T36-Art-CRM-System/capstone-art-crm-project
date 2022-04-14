import { getTime } from "date-fns";
import { getEventbyId } from "./events";

export function getSchedule() {
    return scheduleList.map(scheduleItem => ({title: getEventbyId(scheduleItem.eventId).title, ...scheduleItem}));
}

export function getScheduleByEventId(eventId) {
    console.log(eventId)
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

var now  = new Date(new Date().setMinutes(0));
const tomorrow = new Date(now)
tomorrow.setDate(tomorrow.getDate() + 1)

const weekAgo = new Date(now)
weekAgo.setDate(tomorrow.getDate() - 7)

const weekLater = new Date(now)
weekLater.setDate(tomorrow.getDate() + 7)

let scheduleList = [
    {id: 1, eventId: 1, instructorId: null, start: getTime(now.setHours(8)), end: getTime(now.setHours(10)),  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 2, eventId: 2, instructorId: null, start: getTime(now.setHours(10)), end: getTime(now.setHours(12)),  textColor: "#1890FF", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 3, eventId: 1, instructorId: null, start: getTime(now.setHours(12)), end: getTime(now.setHours(14)),  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 4, eventId: 2, instructorId: null, start: getTime(now.setHours(14)), end: getTime(now.setHours(16)),  textColor: "#1890FF", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 5, eventId: 3, instructorId: null, start: getTime(now.setHours(17)), end: getTime(now.setHours(20)),  textColor: "#AEDE80", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 6, eventId: 1, instructorId: null, start: getTime(tomorrow.setHours(8)), end: getTime(tomorrow.setHours(10)),  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 7, eventId: 2, instructorId: null, start: getTime(tomorrow.setHours(10)), end: getTime(tomorrow.setHours(12)),  textColor: "#1890FF", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 8, eventId: 1, instructorId: null, start: getTime(tomorrow.setHours(12)), end: getTime(tomorrow.setHours(14)),  textColor: "#B18CE7", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 9, eventId: 5, instructorId: null, start: getTime(tomorrow.setHours(17)), end: getTime(tomorrow.setHours(20)),  textColor: "#04297A", allDay: false, isDeleted: false, updated: 1644915600000},
    {id: 10, eventId: 4, instructorId: null, start: weekAgo, end: weekLater,  textColor: "#7A0C2E", allDay: true, isDeleted: false, updated: 1644900600000},
]
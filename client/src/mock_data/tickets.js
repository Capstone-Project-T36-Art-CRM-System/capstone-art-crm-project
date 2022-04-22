import { getTime } from "date-fns";

export function getTicketList() {
    return ticketList.filter(ticket => !ticket.isDeleted).sort((a,b) => b.created - a.created);
}

export function getTicketListByCustomerId(customerId) {
    return ticketList.filter(ticket => !ticket.isDeleted && ticket.customerId === customerId).sort((a,b) => b.created - a.created);
}

export function getTicketListByEventId(eventId) {
    return ticketList.filter(ticket => !ticket.isDeleted).map(ticket => ticket.eventId === eventId).sort((a,b) => b.created - a.created);
}
  
export function getTicketbyId(ticketId) {
    return ticketList.find(ticket => ticket.id === ticketId) || null;
}

export async function addTicket(ticketFields) {

    var nextMonth = new Date(ticketFields.created);
    nextMonth.setDate(nextMonth.getDate() + 31);

    let newTicket = { 
        ...ticketFields,
        isUsed: false,
        isDeleted: false,
        updated: getTime(new Date()),
        id: ticketList.length +1,
        expDate: getTime(nextMonth)
    }

    try {
        ticketList.push(newTicket)
    } catch (error) {
        console.log('Error!')
    }
}

export async function updateTicket(ticketId, ticketFields) {
    let updatedTicket = { 
        ...ticketFields,
        updated: getTime(new Date()),
    }

    try {
        ticketList = ticketList.map(ticket => {
            if (ticket.id === ticketId) { return updatedTicket }
            return ticket
        })
    } catch (error) {
        console.log('Error!')
    }
}

export function deleteTicket(ticketId) {
    try {
        ticketList = ticketList.map((ticket) =>{
            if (ticket.id === ticketId){
                ticket.isDeleted = true;
            }
            return ticket
        })
    } catch (error) {
        console.log('Error!')
    }
}

let ticketList = [
    {
        "id": 1,
        "customerId": "uKfhEwW1jTyPQwqSbfdb",
        "eventId": 4,
        "isUsed": false,
        "expDate": 1689992228365,
        "isDeleted": false,
        "created": 1627000028365,
        "updated": 1627000058365,
    }
]
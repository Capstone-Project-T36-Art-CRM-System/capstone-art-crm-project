import { format, getTime } from "date-fns";

export function getCustomerList() {
    return customerList.filter(customer => !customer.isDeleted).sort((a,b) => b.created - a.created);
}
  
export function getCustomerbyId(customerId) {
    return customerList.find((customer) => customer.customerId == customerId);
}

export function deleteCustomer(customerId) {
    try {
        customerList.map((customer) =>{
            if (customer.customerId === customerId){
                customer.isDeleted = true;
            }
            return customer
        })
    } catch (error) {
        console.log('Error!')
    }
}

export async function addCustomer(customerFields) {
    let newCustomer = { 
        isDeleted: false,
        customerId: "C" + customerList.length + 1,
        created: getTime(new Date()),
        updated: getTime(new Date()),
        ticketList: [],
        docList: [],
        ...customerFields
    }

    try {
        customerList.push(newCustomer)
    } catch (error) {
        console.log('Error!')
    }
}

export async function updateCustomer(customerId, customerFields) {
    let newCustomer = { 
        ...customerFields,
        updated: getTime(new Date()),
    }

    try {
        customerList = customerList.map(customer => {
            if (customer.customerId == customerId) { return newCustomer }
            return customer
        })
    } catch (error) {
        console.log('Error!')
    }
}

let customerList = [
    {
        "isDeleted": false,
        "customerId": "C1",
        "name": "Amiah Pruitt",
        "phone": "272-940-8266",
        "email": "amiah.pruitt@gmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Female",
        "status": "active",
        "isRecordingAgreed": true,
        "created": 1627000028365,
        "ticketList": [
            { 
                "eventId": 0,
                "isUsed": false,
            },
        ],
        "docList": [
            {
                "title": "COVID-19 Passport",
                "type": "Personal",
                "expDate": 1648310365329
            },
            {
                "title": "Service Agreement",
                "type": "Agreement",
                "expDate": null
            },
        ],
    },
    {
        "isDeleted": false,
        "customerId": "C2",
        "name": "Colten Aguilar",
        "phone": "981-699-7588",
        "email": "colten.aguilar@hotmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Male",
        "status": "rejected",
        "isRecordingAgreed": true,
        "created": 1627111128365,
        "docList": [],
    },
    {
        "isDeleted": false,
        "customerId": "C3",
        "name": "Lenna Bergnaum",
        "phone": "226-924-4058",
        "email": "lenna_bergnaum27@hotmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Female",
        "status": "active",
        "isRecordingAgreed": true,
        "created": 1627222228365,
        "docList": [],
    }
]
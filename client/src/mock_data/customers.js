import { getTime } from "date-fns";

export function getCustomerList() {
    return customerList.filter(customer => !customer.isDeleted).sort((a,b) => b.created - a.created);
}
  
export function getCustomerbyId(customerId) {
    return customerList.find((customer) => customer.customerId === customerId) || null;
}

export async function addCustomer(customerFields) {
    let newCustomer = { 
        ...customerFields,
        isDeleted: false,
        customerId: "C" + customerList.length + 1,
        created: getTime(new Date()),
        updated: getTime(new Date())
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
            if (customer.customerId === customerId) { return newCustomer }
            return customer
        })
    } catch (error) {
        console.log('Error!')
    }
}

export function deleteCustomer(customerId) {
    try {
        customerList = customerList.map((customer) =>{
            if (customer.customerId === customerId){
                customer.isDeleted = true;
            }
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
    }
]
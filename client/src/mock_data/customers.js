export function getCustomerList() {
    return customerList.sort((a,b) => b.created - a.created);
}
  
export function getCustomerbyId(customerId) {
    return customerList.find((customer) => customer.customerId == customerId);
}

const customerList = [
    {
        "customerId": "C1",
        "name": "Amiah Pruitt",
        "phone": "272-940-8266",
        "email": "amiah.pruitt@gmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Female",
        "status": "active",
        "created": 1627000028365,
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
        "customerId": "C2",
        "name": "Colten Aguilar",
        "phone": "981-699-7588",
        "email": "colten.aguilar@hotmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Male",
        "status": "rejected",
        "created": 1627111128365,
        "docList": [],
    },
    {
        "customerId": "C3",
        "name": "Lenna Bergnaum",
        "phone": "226-924-4058",
        "email": "lenna_bergnaum27@hotmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Female",
        "status": "active",
        "created": 1627222228365,
        "docList": [],
    }
]
export function getCustomerList() {
    return customerList;
}
  
export function getCustomerbyId(customerId) {
    return customerList.find((customer) => customer.customerId === customerId);
}

const customerList = [
    {
        "customerId": "C00001",
        "name": "Amiah Pruitt",
        "phone": "272-940-8266",
        "email": "olen_legros@gmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Female",
        "status": "active",
    },
    {
        "customerId": "C00002",
        "name": "Colten Aguilar",
        "phone": "981-699-7588",
        "email": "dasia_jenkins@hotmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Male",
        "status": "rejected",
    },
    {
        "customerId": "C00003",
        "name": "Leatrice Handler",
        "phone": "226-924-4058",
        "email": "lenna_bergnaum27@hotmail.com",
        "note": "",
        "birthDate": 1459361875666,
        "gender": "Female",
        "status": "active",
    }
]
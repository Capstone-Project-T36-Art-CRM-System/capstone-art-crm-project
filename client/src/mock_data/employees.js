export function getEmployeeList() {
    return employeeList.sort((a,b) => b.position - a.position);
}

export function getEmployeebyId(employeeId) {
    return employeeList.find((employee) => employee.employeeId == employeeId);
}

const employeeList = [
    {
        employeeId: 1,
        name: 'Amma Lee',
        email: 'amma.lee@artlead.ca',
        position: "Head Manager",
        photoURL: '/static/logo.svg',
        isFired: false,
        phone: "272-940-8266",
        hasAccess: true,
        accessLevel: 2,
        password: "123",
        balance: 0,
        dateEmployeed: 1627000028365,
        dateFired: null
    
    },
    {
        employeeId: 2,
        name: 'Leatrice Handler',
        email: 'leatrice.handler@artlead.ca',
        position: "Manager",
        photoURL: '/static/logo.svg',
        isFired: false,
        phone: "272-940-8266",
        hasAccess: true,
        accessLevel: 1,
        password: "123",
        balance: 0,
        dateEmployeed: 1627000028365,
        dateFired: null
    },
    {
        employeeId: 3,
        name: 'Marine Mooslin',
        email: 'marine.mooslin@artlead.ca',
        position: "Instructor",
        photoURL: '/static/logo.svg',
        isFired: false,
        phone: "272-940-8266",
        hasAccess: true,
        accessLevel: 0,
        password: "123",
        balance: 0,
        dateEmployeed: 1627000028365,
        dateFired: null
    },
]
import { getTime } from "date-fns";

export function getTransactionList() {
    return transactionList.sort((a,b) => b.date - a.date);
}

export function getThisWeekTransactionList() {
    return transactionList.filter((transaction) => new Date(transaction.date) >= (new Date() - 7));
}

export function getLastWeekTransactionList() {
    return transactionList.filter((transaction) => ((new Date() - 14) <= new Date(transaction.date)) >= (new Date() - 7) );
}
  
export function getTransactionListbyId(customerId) {
    return transactionList.filter((transaction) => transaction.customerId === customerId).sort((a,b) => b.date - a.date);
}

// export function getSevenDaysIncomeStat() {
//     return transactionList.filter((transaction) => transaction.customerId === customerId).sort((a,b) => b.date - a.date);
// }

export function addTransaction(transactionFileds){
    let newTransaction = { 
        ...transactionFileds,
        date: getTime(transactionFileds.date)
    }
    console.log(newTransaction)

    try {
        transactionList.push(newTransaction)
    } catch (error) {
        console.log('Error!')
    }
}



let transactionList = [
    {
        "transactionId": 1,
        "type": 'sales',
        "customerId": 'uKfhEwW1jTyPQwqSbfdb',
        "employeeId": null,
        "productCategory": 'Event Ticket',
        "note": 'Ticket – Exhibition "Canadian Cubism"',
        "productId": 1,
        "date": 1646005118365,
        "amount": 150.00,
    },
    // {
    //     "transactionId": 2,
    //     "type": 'sales_refund',
    //     "customerId": 'C1',
    //     "employeeId": null,
    //     "productCategory": 'Event Ticket',
    //     "note": 'Ticket – Exhibition "Canadian Cubism"',
    //     "productId": 1,
    //     "date": 1647505118365,
    //     "amount": 150.00,
    // },
    {
        "transactionId": 3,
        "type": 'salary_expenses',
        "customerId": null,
        "employeeId": 'E1',
        "productCategory":null,
        "note": "Salary payment for Amma Lee",
        "productId": null,
        "productName": null,
        "date": 1648079118365,
        "amount": 200.00,
    },
    {
        "transactionId": 4,
        "type": 'operation_expenses',
        "customerId": null,
        "employeeId": null,
        "productCategory":null,
        "note": 'Flowers and hearts for St. Valentines',
        "productId": null,
        "productName": null,
        "date": 1648570118365,
        "amount": 200.00,
    },
    {
        "transactionId": 5,
        "type": 'sales',
        "customerId": 'uKfhEwW1jTyPQwqSbfdb',
        "employeeId": null,
        "productCategory": 'Artwork',
        "note": "Autum Fruits, 2017",
        "productId": 'A52',
        "date": 1649000118365,
        "amount": 1200.00,
    },
]
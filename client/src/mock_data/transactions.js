export function getTransactionList() {
    return transactionList;
}
  
export function getTransactionListbyId(customerId) {
    return transactionList.filter((transaction) => transaction.customerId === customerId).sort((a,b) => b.date - a.date);
}
// | purchase | expense | salary

const transactionList = [
    {
        "transactionId": 1,
        "type": 'purchase',
        "customerId": 'C1',
        "employeeId": null,
        "productCategory": 'Artwork',
        "productId": 'A52',
        "productName": 'Autum Fruits, 2017',
        "date": 1627111118365,
        "amount": 1200.00,
    },
    {
        "transactionId": 2,
        "type": 'purchase',
        "customerId": 'C1',
        "employeeId": null,
        "productCategory": 'Event Ticket',
        "productId": 'EV1',
        "productName": 'Event Ticket – Painting Class',
        "date": 1627200008311,
        "amount": 150.00,
    },
    {
        "transactionId": 3,
        "type": 'purchase_refund',
        "customerId": 'C1',
        "employeeId": null,
        "expenseCategory": null,
        "productCategory": 'Event Ticket',
        "productId": 'EV1',
        "productName": 'Event Ticket – Painting Class',
        "date": 1627222228365,
        "amount": 150.00,
    },
    {
        "transactionId": 4,
        "type": 'salary',
        "customerId": null,
        "employeeId": 'E1',
        "expenseCategory": null,
        "productCategory":null,
        "productId": null,
        "productName": null,
        "date": 1627222228365,
        "amount": 200.00,
    },
    {
        "transactionId": 5,
        "type": 'expense',
        "customerId": null,
        "employeeId": null,
        "expenseCategory": 'Painting Material',
        "productCategory":null,
        "productId": null,
        "productName": null,
        "date": 1627222228365,
        "amount": 200.00,
    },
]
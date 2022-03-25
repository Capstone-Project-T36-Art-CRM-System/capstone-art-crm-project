export function getPaymentList() {
    return paymentList;
}
  
export function getPaymentListbyId(customerId) {
    return paymentList.filter((payment) => payment.customerId === customerId);
}

const paymentList = [
    {
        "payemntId": 1,
        "customerId": "C00001",
        "type": 'return',
        "message": 'Refund for',
        "productCategory": 'Membership',
        "productId": 'M1',
        "productName": 'Membership Plan B',
        "date": 1627222228365,
        "amount": 150.00,
    },
    {
        "payemntId": 2,
        "customerId": "C00001",
        "type": 'purchase',
        "message": 'Payment for',
        "productCategory": 'Membership',
        "productId": 'M1',
        "productName": 'Membership Plan B',
        "date": 1627200008311,
        "amount": 150.00,
    },
    {
        "payemntId": 3,
        "customerId": "C00001",
        "type": 'purchase',
        "message": 'Payment for',
        "productCategory": 'Artwork',
        "productId": 'ART12',
        "productName": 'Red Landscape, 2009',
        "date": 1627111118365,
        "amount": 1200.00,
    },
]
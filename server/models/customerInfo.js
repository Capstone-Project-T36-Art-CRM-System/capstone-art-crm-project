import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    name: String,
    gender: String,
    birthDate: {
        type: Date,
        default: new Date()
    },
    phone: String,
    email: String,
    note: String,
    balance: {
        type: Number,
        default: 0
    },
    profileImage: String,
    creator: String

});

const CustomerInfo = mongoose.model('CustomerInfo', customerSchema);

export default CustomerInfo;
import CustomerInfo from "../models/customerInfo.js";

export const getCustomers = async (req, res) => {
    try {
        const customerInfos = await CustomerInfo.find();

        res.status(200).json(customerInfos);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createCustomer = async (req, res) => {
    const customer = req.body;

    const newCustomer = new CustomerInfo(customer);

    try {
       await newCustomer.save();

       res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
} 
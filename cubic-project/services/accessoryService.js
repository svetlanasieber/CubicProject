import Accessory from '../models/Accessory.js';

function getAll() {
    return Accessory.find().lean();
}

function getAllUnattached(cubeAccessories) {
    return Accessory.find({ _id: { $nin: cubeAccessories } }).lean();
}

function create(data) {
    const accessory = new Accessory(data);
    return accessory.save();
}

export default {
    getAll,
    getAllUnattached,
    create
};
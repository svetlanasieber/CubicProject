import Accessory from '../models/Accessory.js';
import Cube from '../models/Cube.js';

async function getAll(query) {
    const result = Cube.find().setOptions({ lean: true })
        .where({ name: { $regex: query.search || '', $options: 'i' } })
        .where({ difficultyLevel: { $gte: query.from || 1, $lte: query.to || 6 } });
    return result;
};

function getOne(id) {
    return Cube.findById(id).lean();
}

function getOneWithAccessories(id) {
    return Cube.findById(id).populate('accessories').lean();
}

function create(userId, data) {
    const cube = new Cube({ creator: userId, ...data });
    return cube.save();
}

async function attachAccessory(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);
    const resultCube = cube.save();
    const resultAccessory = accessory.save();
    
    return Promise.all([resultCube, resultAccessory]);
}

function updateOne(cubeId,cubeData) {
    return Cube.findByIdAndUpdate({ _id: cubeId }, cubeData, { useFindAndModify: false });
}

function deleteOne(cubeId) {
    return Cube.findByIdAndDelete(cubeId);
}

export default {
    getAll,
    getOne,
    getOneWithAccessories,
    create,
    attachAccessory,
    updateOne,
    deleteOne
};
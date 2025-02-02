import mongoose from 'mongoose';

const accessoryScheme = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true, validate: /^https?/ },
    cubes: [{ type: mongoose.Types.ObjectId, ref: 'Cube' }]
});

export default mongoose.model('Accessory', accessoryScheme);
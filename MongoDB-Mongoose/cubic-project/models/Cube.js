import mongoose from 'mongoose';

const cubeScheme = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true, validate: /^https?/ },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 },
    accessories: [{ type: mongoose.Types.ObjectId, ref: 'Accessory' }]
});

cubeScheme.methods.getInfo = function () { return `My name is ${this.name}` };
cubeScheme.virtual('presentation').get(function () { return `${this.name}: ${this.description}` });
// cubeScheme.path('imageUrl')
//     .validate(function () { return this.imageUrl.startsWith('http') }, 'ImageUrl should start with http or https!');

export default mongoose.model('Cube', cubeScheme);
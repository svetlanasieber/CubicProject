import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    roles: [{ type: String }]
});

export default mongoose.model('User', userSchema);
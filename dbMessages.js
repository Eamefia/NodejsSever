import mongoose from 'mongoose';

const whatsappSchema = mongoose.Schema({
    message: String,
    receiverId: String,
    senderId: String,
}, { timestamp: true });

export default mongoose.model('messagecontents', whatsappSchema)
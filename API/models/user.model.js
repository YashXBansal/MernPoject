import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1698835761~exp=1698836361~hmac=df5e9a5444ff8317a5b75828ac2daa80904618617cd518e1104c899624a28996",
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
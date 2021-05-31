const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true

    },
    imgUrl: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps:true
});

const User =mongoose.model('user',userSchema);
module.exports=User;






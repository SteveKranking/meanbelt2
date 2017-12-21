const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
    option:{
        type: String,
        requires:[true, 'Option must be at least three characters.'],
        minlength:[3,'Option must be at least three characters']
    },
    vote:{
        type: Number,
        default: 0
    },
    poll:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Poll'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps:true});

mongoose.model('Option', OptionSchema);
const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    question:{
        type: String,
        required:[true, 'Question must be at least 10 characters'],
        minlength:[10, 'Question must be at least 10 characters']
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Option'
    }],
    description: {
        type: String,
        required: [true, "Your question needs a caption"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    numAnswers: {
        type: Number,
        default: 0
    }
},{timestamps: true});

mongoose.model('Poll', PollSchema);

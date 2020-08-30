const mongoose = require('mongoose');


const uri = process.env.MONGO_URI;
console.log(uri);
const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };

(async () => {
    try {
        await mongoose.connect(uri, options);
        console.log('connected to mongo');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
)();

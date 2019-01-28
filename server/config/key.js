const mongoose = require('mongoose');

// const db = mongoose
//             .connect('mongodb://feralbuddleia:mlab12345@ds139334.mlab.com:39334/netflix')
//             .then(()=> console.log('MongoDB connected'))
//             .catch(err => console.log(err))

const db = mongoose.connection;
const dbConnect = () => {
    mongoose.connect('mongodb://feralbuddleia:mlab12345@ds139334.mlab.com:39334/netflix')
}
db.once("open",()=> console.log('MongoDB connected'));
module.exports = init;

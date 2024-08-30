const mongoose =  require('mongoose');
const db = 'loremasters_library';

mongoose
    .connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${db}`)
    .then(() => {
        console.log(`The loremaster's database is up and running`);
    })
    .catch((err) => {
        console.error(err);
    })

module.exports = mongoose.connection;
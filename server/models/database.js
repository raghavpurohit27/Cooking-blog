const mongoose = require('mongoose');
mongoose.connect(process.env.MONOGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

//models
require('./Category');
require('./Recipe');

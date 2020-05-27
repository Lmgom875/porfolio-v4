//! NPM Packaege require
const express = require ('express');
const morgan = require ('morgan');

//! Path require
const info = require('./routes/info')
const message = require('./routes/message');
const repo = require('./routes/repo');


const app = express();
const PORT = process.env.PORT || 3001;




app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(info);
app.use(message);
app.use(repo);


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.listen(PORT, function() {
    console.log(`API listening on PORT ${PORT}!`);
})



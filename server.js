const express = require ('express');


const info = require('./api/info')
const message = require('./api/message');
const repo = require('./api/repo');


const app = express();
const PORT = process.env.PORT || 3001;




app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(info);
app.use(message);
app.use(repo);


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.listen(PORT, function() {
    console.log(`API listening on PORT ${PORT}!`);
})



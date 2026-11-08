const express = require('express')
var cors = require('cors');
const app = express();
var cookieParser = require('cookie-parser');
const listBlogRouters = require("./routes/listBlogRoutes")
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
const bcryptSalt = bcrypt.genSalt(10)

app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5500'
}))


app.use('/blog', listBlogRouters)


app.listen(4000)
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
// importing uuid v4 as "uuid"
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
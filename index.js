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

let listings = [
    {
        id: uuid(),
        title: 'Cozy cabin getaway in Flagstaff, AZ',
        img: 'https://a0.muscache.com/pictures/820fb2b5-1cae-4685-b592-b7fd662c97f9.jpg',
        lister: 'Wamuu',
        rating: 4.76
    },
    {
        id: uuid(),
        title: 'Charming drug-den in downtown LA',
        img: 'https://i.ytimg.com/vi/7CNKdZhPJ0o/maxresdefault.jpg',
        lister: 'Armed Suspect',
        rating: 3.08
    }
]

// ----- GETTING ALL LISTINGS -----
app.get('/listings', function (req, res) {
    res.render('listings/index', { listings })
    console.log(listings)
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})

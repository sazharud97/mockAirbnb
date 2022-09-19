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
// app now references stylesheets in "public" dir
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'))

let listings = [
    {
        id: uuid(),
        title: 'Cozy cabin getaway in Flagstaff, AZ',
        description: 'how bout u go an fuck off my page then u peice of shit u think I need a stupid fuckwitt like u telling me about renting out a house who the fuck are u take your worthless advice and get the fuck out of here ',
        img: 'https://a0.muscache.com/pictures/820fb2b5-1cae-4685-b592-b7fd662c97f9.jpg',
        lister: 'Wamuu',
        rating: 4.76
    },
    {
        id: uuid(),
        title: 'Charming drug-den in downtown LA',
        description: 'try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. try harder pig. ',
        img: 'https://i.ytimg.com/vi/7CNKdZhPJ0o/maxresdefault.jpg',
        lister: 'Armed Suspect',
        rating: 3.08
    },
    {
        id: uuid(),
        title: 'Cute minimalist abandoned sniper nest in Post-apocalypse Nevada',
        description: "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces.You are nothing to me but just another target.I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words.You think you can get away with saying that shit to me over the Internet? Think again, fucker.As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot.The storm that wipes out the pathetic little thing you call your life.You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands.Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit.If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue.But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.",
        img: 'https://static.wikia.nocookie.net/fallout/images/9/92/Sniper%27s_Nest.jpg',
        lister: 'mailman',
        rating: 3.38
    }
]

// ----- GETTING ALL LISTINGS -----
app.get('/listings', function (req, res) {
    res.render('listings/index', { listings })
    console.log(listings)
})

// ----- GETTING INDIVIDUAL COMMENT DETAILS BY ID -----
app.get('/listings/:id', (req, res) => {
    // taking ID from url
    const { id } = req.params;
    // finding a comment w/ ID matching one passed in URL
    const listing = listings.find(c => c.id === id);
    // passing found comment to render template
    res.render('listings/show', { listing })
})

// ----- GETTING FORM FOR EDITING LISTING -----
app.get('/listings/:id/edit', (req, res) => {
    // taking ID from url
    const { id } = req.params;
    // finding a listing w/ ID matching one passed in URL
    const listing = comments.find(c => c.id === id);
    // rendering "edit" template w/ found listing
    res.render('listings/edit', { listing })
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})

// ------------------ REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bcrypt = require('bcryptjs');

// Simulates a DB
const db = {
    notes: {
        1: {
            id: 1,
            content: 'Learn HTML, CSS, JS',
        },
        2: {
            id: 2,
            content: 'Implement a CRUD in Express',
        },
        3: {
            id: 3,
            content: 'Have fun!',
        },
    },
    users: {
        1: {
            id: 1,
            email: '1@1',
            password: '123'
        }
    }
};

// ------------------ SETUP / MIDDLEWARE
const app = express();
const port = 3000;

// external middleware like morgan to log every request to our server
app.use(morgan('dev'));

// sets the template engine as html with embbedded js (views/*.ejs)
app.set('view engine', 'ejs');

// allow our server to parse/decode data through the use of a body (req.body)
app.use(express.urlencoded({ extended: false }));

// allow our server to parse data throguh the req.cookies object
// app.use(cookieParser())

// allow our server to parse data throguh the req.session object
app.use(cookieSession({
    name: 'session',
    keys: ['pikachu', 'charizard'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

const validateUserIdCookie = (req, res, next) => {
    // validate user is logged in by checking cookie
    // const { user_id } = req.cookies
    const { user_id } = req.session
    if(!user_id){
        return res.status(400).send('Please login to visit this page')
    }
    next()
}

// ------------------ ROUTES/ENDPOINTS
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test/:id', (req, res) => {
    console.log('req.params', req.params); // url.com/users/123/products/456
    console.log('req.query', req.query); // url.com/cities/cancun?min=100&max=300
    res.send('Test route!');
});

// NOTES RENDERING ROUTES - INTERACTIONS WITH THE USER
// NOTES (LIST, NEW, SHOW)
// NOTES LIST
app.get('/notes', validateUserIdCookie, (req, res) => {
    // populate template variables
    const templateVars = {
        notes: db.notes,
    };

    // render template with variables
    res.render('notes/index', templateVars);
});

// NOTES NEW
app.get('/notes/new', validateUserIdCookie, (req, res) => {
    // render template
    res.render('notes/new');
});

// NOTES SHOW
app.get('/notes/:id', validateUserIdCookie, (req, res) => {
    // Refer to the note and validate it exists
    const note = db.notes[req.params.id];
    if (!note) {
        return res.status(404).send('Note not found');
    }

    // populate template variables and render
    const templateVars = { note };
    res.render('notes/show', templateVars);
});

// REST API CRUD NOTES - NOT INTERACTING WITH THE USER, JUST DATA HANDLERS
// CREATE NOTE API - POST
app.post('/api/notes', validateUserIdCookie, (req, res) => {
    // body properties validation
    const { content } = req.body;
    if (!content) {
        return res.status(400).send('Provide content to create a note');
    }

    // creates an id and stores new note object in database
    const id = Math.floor(Math.random() * 100);
    db.notes[id] = {
        id,
        content,
    };

    // print database to see results
    console.log(db.notes);

    // redirect to main notes page to see new created note
    res.redirect('/notes');
});

// READ ALL NOTES API - GET
app.get('/api/notes', (req, res) => {
    // all notes in json
    res.send(db.notes);
});

// READ ONE NOTE API - GET
app.get('/api/notes/:id', (req, res) => {
    // Refer to the note and validate it exists
    const note = db.notes[req.params.id];
    if (!note) {
        res.status(404).send('Note not found');
    }

    // one note in json
    res.send(note);
});

// UPDATE NOTE API - POST/PUT/PATCH
app.post('/api/notes/:id/edit', validateUserIdCookie, (req, res) => {
    // body properties validation
    const { content } = req.body;
    if (!content) {
        return res.status(400).send('Provide content to create a note');
    }

    // Refer to the note and validate it exists
    const note = db.notes[req.params.id];
    if (!note) {
        res.status(404).send('Note not found');
    }

    // after validating all steps, update the notes content
    db.notes[req.params.id].content = content;

    // print database to see results
    console.log(db.notes);

    // redirect to main notes page
    res.redirect('/notes');
});

// DELETE NOTE API - POST/DELETE
app.post('/api/notes/:id/delete', validateUserIdCookie, (req, res) => {
    // Refer to the note and validate it exists
    const note = db.notes[req.params.id];
    if (!note) {
        res.status(404).send('Note not found');
    }

    // after validating all steps, delete the note
    delete db.notes[req.params.id];

    // print database to see results
    console.log(db.notes);

    res.redirect('/notes');
});

// USERS RENDERING ROUTES
// REGISTER
app.get('/register', (req, res) => {
    res.render('users/register')
})

// LOGIN
app.get('/login', (req, res) => {
    res.render('users/login')
})

// USERS REST API ROUTES
// REGISTER
app.post('/api/users', (req, res) => {
    const { email, password } = req.body
    if(!email || !password){
        return res.status(400).send('Email and password must be provided')
    }

    const id = Math.floor(Math.random() * 100);
    const hashedPassword = bcrypt.hashSync(password, 8);
    db.users[id] = {
        id,
        email,
        password: hashedPassword
    }

    // res.cookie('user_id', id)
    req.session.user_id = id
    res.redirect('/notes')
})

// LOGIN
app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body
    if(!email || !password){
        return res.status(400).send('Email and password must be provided')
    }

    let user = null
    for (id in db.users) {
        if(db.users[id].email === email) {
            user = db.users[id]
        }
    }
    if(!user){
        return res.status(400).send('Invalid credentials')
    }

    // const passwordsMatch = user.password === password
    const passwordsMatch = bcrypt.compareSync(password, user.password);
    if(!passwordsMatch) {
        return res.status(400).send('Invalid credentials')
    }

    // res.cookie('user_id', id)
    req.session.user_id = id
    res.redirect('/notes')
})

app.get('/api/users', (req, res) => {
    res.send(db.users)
})

app.post('/api/users/logout', (req, res) => {
    // res.clearCookie('user_id')
    req.session = null;
    res.redirect('/login')
})

// Catch all route
app.use((req, res) => {
    res.status(404).send('Not found!');
});

// ------------------ LISTENER
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
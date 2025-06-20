import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home', { posts });
});

app.get('/post/:title', (req, res) => {
    const post = posts.find(p => p.title === req.params.title);
    if (post) res.render('post', { post });
    else res.status(404).send('Post not found');
});

app.get('/compose', (req, res) => {
    res.render('compose');
});

app.post('/compose', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});
  
app.listen(port, ()=>{
    console.log(`App running on ${port}`);
});
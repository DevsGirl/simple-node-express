const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello i am a new learner and my name is sumi and I am a student of hero community.')
});

const users = [  {id: 0, name: 'sabana', email: 'sabana@gmail.com', phone: '0197777777'},
{id: 1, name: 'sabnoor', email: 'sabnoor@gmail.com', phone: '0197777777'},
{id: 2, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0197777777'},
{id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '0197777777'},
{id: 4, name: 'susmita', email: 'susmita@gmail.com', phone: '0197777777'},
{id: 5, name: 'susmita', email: 'susmita@gmail.com', phone: '0197777777'}]
app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
})
//app.method
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})
//daynamic api
app.get('/users/:id', (req, res) => {
    const id =(req.params.id);
    const user = users[id]
    res.send(user);
})

app.get ('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammi yammi mangoes')
})
app.listen(port, () => {
    console.log('listening to port', port)
})
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const events = []; // normalement on créer un service à part pour stocker ces events, ici exemple

app.post('/events', (req, res) => {
    const event = req.body;      
    events.push(event);

    axios.post('http://posts-cluserip-srv:4000/events', event); // post
    axios.post('http://comments-clusterip-srv:4001/events', event); // comment
    axios.post('http://query-clusterip-srv:4002/events', event); // query 
    axios.post('http://moderation-clusterip-srv:4003/events', event); // moderation

    res.send({ status: 'OK' });
});

app.get('/events', async (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
    console.log('Listen to port 4005');
});
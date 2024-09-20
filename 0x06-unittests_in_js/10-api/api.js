const express = require('express');

const app = express();
const PORT = 7865;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
})

app.get('/cart/:id(\\d+)', (req, res) => {
    const input = req.params.id;

    res.send(`Payment methods for cart :${input}`)
})

app.get('/available_payments', (req, res) => {
    const response = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
    };

    res.json(response)
})

app.post('/login', (req, res) => {
    let username = ''
  
    if (req.body) {
      username = req.body.userName;
    }

    res.send(`Welcome ${username}`)
  })

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
})

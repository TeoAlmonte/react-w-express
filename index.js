let express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {
      id: 1, customer: 'John'
    },
    {
      id: 2, customer: 'Johnny'
    },
    {
      id: 3, customer: 'Jons'
    }
  ]
  res.json(customers)
})

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`))
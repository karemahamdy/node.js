import * as http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  const data ={
    products: [{
        id: 1,
        name: 'Product 1',
        price: 10.99
    },
{        id: 2,
        name: 'Product 2',
        price: 19.99
    },
{        id: 3,
        name: 'Product 3',
        price: 5.49
                        }
                    ],
  }
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});

import http from 'http';

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // route: /products
  if (url === '/products' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const data = {
      products: [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 5.49 }
      ]
    };

    res.end(JSON.stringify(data));
  }

  // route: GET /add-product (form)
  else if (url === '/add-product' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const html = `
      <html>
        <body>
          <form action="/add-product" method="POST">
            <input type="text" name="productName" placeholder="Product Name" required />
            <input type="number" name="productPrice" placeholder="Product Price" required />
            <button type="submit">Add Product</button>
          </form>
        </body>
      </html>
    `;

    res.end(html);
  }

  // route: POST /add-product
  else if (url === '/add-product' && method === 'POST') {
    const body: Buffer[] = [];

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); // productName=xxx&productPrice=123

      res.statusCode = 302;
      res.setHeader('Location', '/products');
      res.end();
    });
  }

  // not found
  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(5001, () => {
  console.log('Server running at http://localhost:5001');
});

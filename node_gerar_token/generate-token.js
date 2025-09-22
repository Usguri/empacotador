const jwt = require('jsonwebtoken');

const newToken = jwt.sign(
    { id: '68ecfcef-7e68-47ee-8693-2c0b47915616' },
    '49c63cb8bebdee10752a1224f1802afe'
);
console.log(newToken);
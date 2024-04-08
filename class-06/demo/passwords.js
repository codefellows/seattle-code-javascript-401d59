'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
let username = 'Jacob';
let password = 'supersecret';

// make sure you are using an HTTP(S) - all data is encrypted by the network.

// username:password
let basicCredentials = `${username}:${password}`;
console.log(basicCredentials);

let encodedCredentials = base64.encode(basicCredentials);
console.log('Encoded credentials', encodedCredentials);

let decodedCredentials = base64.decode(encodedCredentials);

// seperate back to username and password;
let [ un, pass ] = decodedCredentials.split(':');
console.log(un, pass);

// encrypt our passwords ASAP.
bcrypt.hash(pass, 15)
.then(hashedPassword => {
  console.log('HASHED PASSWORD', hashedPassword);

  // how to we know the user has given us the same password???
  
  bcrypt.compare('supersecret', hashedPassword).then(bool => {
    console.log('PASSWORDS MATCH??', bool);
  });

});
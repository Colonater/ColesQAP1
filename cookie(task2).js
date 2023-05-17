//gather the ingredients for baking
const { parse, serialize } = require('cookie');

//get all your cookie ingredients together and get ready to mix them
const cookieString = 'car=subaru; model=wrx; color=white';
const parsedCookie = parse(cookieString);

// taste the cookie and its values as keys 
const car = parsedCookie['car'];
const model = parsedCookie['model'];
const color = parsedCookie['color']; 

//time to taste the cookies output the results to the terminal
console.log('car:', car);
console.log('model:',  model);
console.log('color:',  color);

//make another batch of cookies
const newCookie = {
    name: 'username',
    value: 'subaruwrx',
    options: {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Expires in 30 days
        secure: true, // Only sent over HTTPS
        httpOnly: true, // Cannot be accessed by client-side JavaScript
    }
};

//shape the cookie and bake it
const serializedCookie = serialize(newCookie.name, newCookie.value, newCookie.options);


// the cookies are now ready to be enjoyed
console.log('Serialized Cookie:', serializedCookie);


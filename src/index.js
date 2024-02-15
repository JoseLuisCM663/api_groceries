import app from './app.js';
import database from './db.js';
const c = console.log.bind(console);
const port = process.env.SERVER_PORT;

app.listen(port, () => { 
    c(`Server on port ${port}`);
});


//20 * 60 = 1200 - 300 = 900
//9 somos 
//9 * 50 = 450 
//25 - 9 = 16
//16 * 40 = 640
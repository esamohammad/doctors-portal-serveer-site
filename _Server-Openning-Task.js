/*
============================================================================
******************** Start the Server on the grass root ********************
============================================================================


1.
cd \Database

2.
mkdir doctors-portal-serveer-site

3.
cd doctors-portal-serveer-site

4.
npm init -y

5.
code .

6.npm i express cors dotenv mongodb jsonwebtoken

7.index.js  (file open)

8."start":"node index.js",
    "start-dev":"nodemon  index.js",  (add into script in package.json)

9. 
const express = require('express')
const app = express()
const port =process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from Doctor Uncle!!')
})

app.listen(port, () => {
  console.log(`Doctors app listening on port ${port}`)
})

(((add  hellow world backend code from express.js into index.js file)))


10.
const cors = require('cors'); (import on 2nd line in index.js)

11. 
//middle ware
app.use(cors());
app.use(express.json()); 
(write it in the index.js)

12.
require('dotenv').config();
(import on 3rd line in index.js)

13.  
.env (creat .env file)

14.  
.gitignore (creat .gitignore file)

15. 
git init (project initialised in cmd)

16. 
node_modules
.env

(write both name in gitignore)

17.
npm run start-dev   
or nodemon index.js 
(start the Project)

18.
app listening on port 5000 (ai lekha ashbe cmd te -- ensure it)

19.
http://localhost:5000/ 
(open it on your browser)

============================================================================
************** Ok, Server is ready but now set the database. ***************
============================================================================
*/















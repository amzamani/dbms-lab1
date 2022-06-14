# BloGGing

A Blog Application that provides the user the accessibility to perform most of the necessary functionalities it should contain

# Deployed Link : https://abu-blog-dbms.herokuapp.com/

## Technologies Used

#### Back-end
* For handling server requests: `Node.Js (with Express Framework)`
* As Database: `MySQL`
* FreeMySQLhosting used in deployed version [5 MB free DB link](https://freemysqlhosting.net)

#### Front-end
* Tools: `HTML, CSS , Javascript & EJS`
* Framework: `Semantic UI`

## Guidelines to setup

### Prerequisites
* NPM should be installed: `NPM version > 6.8.5`
* NODE should be installed: `NODE LTS version > 10.12.8`
* MySQL should be installed: `MySQL version > 8.0.10`

### Steps
1. Create a `.env` file and the format should be as given in `.env.example`.
2. Run these commands then - 
    ```
    npm install (To install all the dependencies)
    
    npm audit fix     (Run this to audit fix all the vulnerabilities)
    ```
3. Run `setup.sql` file in the mysql client
    ```
    source <file path>/setup.sql
    ```
4. Start the server - 
    ```
    npm start (run the server)
    ```

## [LIVE LINK](https://abu-blog-dbms.herokuapp.com/)
  





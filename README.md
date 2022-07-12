# BloGGing

A Blog Application that provides the user the accessibility to perform most of the necessary blogging functionalities 

# Deployed Link : https://abu-blog-dbms.herokuapp.com/

## Project Report https://docs.google.com/document/d/1Em6t6r9HcJZ7vQTuBWbgcDKQBKNCUmMpMPl1Fpvycvs/edit?usp=sharing

## Technologies Used

#### Back-end
* For handling server requests: `Node.Js (with Express Framework)`
* As Database: `MySQL`
* Microsift Azure is used in deployed version

#### Front-end
* Tools: `HTML, CSS , Javascript & EJS`


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



## SQL specific guideline

### Steps
1. open cli and type  

```
mysql -u root -p;
```

2. enter root user password in CLI

```
SELECT User,Host FROM mysql.user; 
```

#above command shows list of all users

3. enter these commands

```
CREATE DATABASE blog_app;
USE blog_app;

create user abc12345678@localhost identified with mysql_native_password by 'password123';


grant all privileges on blog_app.*  to abc12345678;

flush privileges;
```
4. Change the env variables in .env file that you created

5. Run `setup.sql` file in the mysql client
    ```
    source <file path>/setup.sql
    ```
    or  you can manually query from 
    https://github.com/amzamani/dbms-lab1/blob/master/setup.sql


# Live Deployment
1. Used heroku for PaaS
2. Resources for deployment
2. https://azure.microsoft.com/en-us/free/students/
4. https://docs.microsoft.com/en-us/azure/mysql/flexible-server/how-to-connect-tls-ssl
5. https://docs.microsoft.com/en-us/azure/mysql/single-server/tutorial-design-database-using-portal
6. https://docs.microsoft.com/en-us/azure/mysql/single-server/quickstart-create-mysql-server-database-using-azure-portal



## [LIVE LINK](https://abu-blog-dbms.herokuapp.com/)
  





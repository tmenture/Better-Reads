# Better Reads

## Purpose:
This is a blog for readers. Any user who comes across the site will be able to search any book and be presented with the title, author and a short description of what the book is about. If a user decides to create an account they will have the authority to add or delete reviews, through a user dashboard, and comment on other peoples reviews all seen from the home page. When a user navigates to the dashboard they will be presented with all the posts they have made where they can view or edit their posts. All in all if youre looking for a new book or a highly reccommended one check out what our users have to say. 

## Installation (For People Looking To Help Make Better Reads Be The Best):
* If you do not already have it installed, install node.js (Here is the link to the download: https://nodejs.org/en/download/)
* Clone this repository to your machine (& switch to the directory you just created)
* Run npm i in your console to install necessary packages to run databse
* Create a .env file; add these three variables DB_NAME='new_blog_db' DB_USER='your mysql username' DB_PW='your mysql password', 
    and save to create the connection. (Dont forget to add the .env file to the .gitignore file so you do not post your credentials anywhere)
* From here you can use the pre created seeds or alter them to include your test info
* Once satisfied with the seeds run npm start to create and start the database
* Then use ctrl C (on windows) to exit the server; back in console run npm run seeds to upload your test info to the database
* Run npm start once more in the console and your database will be up and running filled with all your data

## Link to Deployed Application (On Heroku):
https://bestest-reads.herokuapp.com/

![Snapshot](/repo-pic/assets/better-reads-pic.png)

## Built With: 
* Node.js
    - Packages Used:
        - axios
        - bcrypt
        - bootstrap
        - connect-session-sequelize
        - dotenv
        - express
        - express-handlebars
        - express-session
        - handlebars
        - mysql
        - mysql2
        - sequelize
* JavaScript
* SQL

## Contributions:
#### Thomas Menture
- Contact: thomasoxemail@gmail.com

#### Liz Ditullio
- Contact: lizdit72296@gmail.com

#### Gabriella Akpojiyovwi
- Contact: ella9894@gmail.com

#### Aidan Christie
- Contact: aidanchristie@gmail.com
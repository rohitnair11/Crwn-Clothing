# Crwn-Clothing

Crwn-Clothing is an E-commerce application built using React, Redux and Node.js. Firebase is used as the backend for authentication and data storage. There's a checkout component that leverages the Stripe API for handling online payments. The `styled-components` library and SASS is used for styling. The application is configured to be a Progressive Web Application (PWA).  

The application is deployed using Heroku: [Crwn-Clothing](https://crwnnclothing.herokuapp.com/)  


## Running Instructions

Run `npm install` inside the root folder and inside the client folder to install the client and server dependencies.  

`npm run dev` - To run both the client and server code. The client runs at port 3000 and the node server runs at port 5000.  

### Set up Firebase

* Create a Firebase account.
* Go to Authentication >> Sign-in method and enable Email / Password and Google Sign-in menthods.
* Go to Database, create a database and create the following collections inside it:
    * users
    * collections
* Replace the config object inside `client/src/firebase/firebase.utils.js` with your firebase config. The firebase config can be found in the Firebase project settings >> Firebase SDK snippet.


### Set up Stripe

* Create a Stripe account.
* Go to Developers >> API key and copy the Publishable key.
* Replace the publishable key in `client/src/components/stripe-button/stripe-button.component.jsx` with the copied key.
* Copy the secret key from Developers >> API key in the Stripe dashboard.
* Create a `.env` file in the root folder and set the `STRIPE_SECRET_KEY` to the copied key.  
`STRIPE_SECRET_KEY=<secret_key>`
* Make sure the `.env` file is included in the gitignore and the secret key is not published to github.

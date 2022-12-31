# CoWIN India

This is a clone of India's Covid-19 vaccination drive website CoWIN. It was submitted as the Capstone project for Full Stack Developer Internship at GeoGo Technologies Pvt. Ltd.

This project uses the API hosted here: [**zohaib2002**/cowin-clone-api](https://github.com/zohaib2002/cowin-clone-api)  
Scroll to bottom for deployment link.

https://user-images.githubusercontent.com/68106969/210131143-c00aa05f-8677-470c-9052-93cda115f0ff.mp4

## API Features

CoWIN API provides API endpoints for all the components involved in a Covid-19 vaccination service.

- ### CoWIN Website
  - Create and Register new beneficiaries
  - Book / View Appointments for users
  - Notify users if thier appointment is expired
- ### Administration
  - Create / Update / View / Delete Vaccination centers
  - Maintain number of slots available per day for each center
  - Get all Cneters in a given city
  - Cancel appointments for users
  - Remove beneficiaries
- ### Vaccination Center
  - Get all appointments by center
  - Complete appointments (updates doses taken for user)

## Working of OTP Validation

### Validation

- When the user enters mobile number, an OTP instance with the mobile number, randomly generated OTP code, and an expiration time of 5 minutes is created in the MongoDB Database.
- When the user enters the OTP, CoWIN API tries to find the instance with the same mobile no. and OTP code. If it does so, the mobile number is validated, otherwise it responds with 'Invalid OTP'

### User Registration

- After validation, if a user with that mobile number is already in the database, the details of this user is sent through the response. Otherwise, the API sends the details of a blank (placeholder) user.
- This blank user is to be registered using the register user endpoint by providing Full Name and Identity number

### NOTE

- Since SMS is a paid service, the API is configured to send the OTP code through a response, which is then displayed at the client/browser as an alert.
- Since the API is currently hosted on Heroku (Free), Web dynos idle (sleep) after a period of inactivity of 30 minutes and require time to wakeup after the next request.
- **It may take upto 30 seconds for you to receive the OTP after submitting your mobile number**

## Feel free to contribute!

This project is deployed on Netlify  
**See it in action:** https://pedantic-jackson-3ea425.netlify.app/

This is a part of GeoGo Techsolutions FullStack Internship Program Project.

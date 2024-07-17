# ClubHub - For Managing Clubs and Events

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technical Stack](#technical-stack)
4. [Requirements](#requirements)
5. [Installation](#installation)


## Introduction
ClubHub is an admin dashboard application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides administrators with tools to create and manage clubs, events associated with those clubs, and track the number of participants.

## Features
- **Club Management:** Create, update, and delete clubs.
- **Event Management:** Add events to clubs with details such as date, time, and location.
- **Participant Tracking:** Record and manage the number of participants for each event.
- **User Authentication:** Secure login and authentication system for administrators.
- **Dashboard Insights:** Visualize club and event data through intuitive dashboards and reports.

## Technical Stack
- **Front-End:** React.js, Redux
- **Back-End:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT), bcrypt
- **Other Technologies:** Mongoose (ODM for MongoDB), Axios (HTTP client)

## Requirements
- Node.js
- MongoDB
- npm or yarn

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/clubhub.git
    cd clubhub
    ```
2. Install dependencies:
    ```sh
    npm install
    cd client
    npm install
    cd ..
    ```
3. Set up environment variables: Create a `.env` file in the root directory and add the following variables:
    ```sh
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
4. Run the application:
    ```sh
    npm run dev
    ```
    This command will concurrently start both the server and the client.


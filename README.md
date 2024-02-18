# Ombori Code Test - Fullstack

![app screenshots](/resources/cover.jpg)

## Overview

This web application is developed using React with Typescript and Redux-Toolkit. It interfaces with external APIs to load user data dynamically.

## Key Features

1. **Custom Loader**: The application displays a custom loader for 3 seconds during the initial loading phase.

2. **User Data Fetching**: User data is fetched from the [reqres.in](https://reqres.in/) API to populate the application.

3. **Infinite Scrolling**: The application implements lazy loading of user data through infinite scrolling, enhancing the user experience.

4. **Dark/Light Mode Switch**: Users can toggle between dark and light modes to customize their viewing experience.

5. **Code Formatting**: EsLint and Prettier are utilized for consistent and clean code formatting, ensuring code quality and maintainability.


## Getting Started with Docker

Follow the below steps to run the application in a Docker environment.

 1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) & [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
   
 2. Clone the repository
    ```bash
    git clone https://github.com/sajithaliyanage/fullstack-code-test-ts.git
    ```
 3. Run application
    ```bash
    cd fullstack-code-test-ts
    docker-compose -f docker-compose.yaml up --build 
    ```
 4. Open browser `http://localhost:3000`


## Getting Started without Docker

Follow the below steps to run the application in your local environment.

 1. Install [Node](https://nodejs.org/en/)
   
 2. Clone the repository
    ```bash
    git clone https://github.com/sajithaliyanage/fullstack-code-test-ts.git
    ```

 3. Install and run React application
      ```bash
      cd fullstack-code-test-ts
      npm install
      npm start
      ```

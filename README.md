
# **AURO Assessment Skills Master**

> The AURO Assessment Skills Master project is designed to evaluate and enhance users proficiency in various domains through a structured assessment platform. It comprises a client-side application developed with JavaScript and a server-side component utilizing Node.js, facilitating a seamless user experience for skill assessments.

---


## Overview
The **AURO Assessment Skills Master** is a robust system for skill evaluation, featuring:
- Aptitude questions to assess problem-solving abilities.
- Coding challenges to test programming skills.
- A seamless interface powered by a React.js front-end and a Node.js back-end.
- A secure and efficient data layer using MySQL.

---

## Features
- **Aptitude Tests**: A collection of questions to test reasoning and analytical skills.
- **Coding Problems**: Hands-on programming challenges to refine coding expertise.
- **User-Friendly Interface**: Clean and responsive design for smooth user interaction.
- **Database-Driven Backend**: MySQL ensures efficient and secure data storage and retrieval.

---

## Technologies Used
- **Frontend**:
  - React.js (JavaScript framework)
  - CSS for styling
- **Backend**:
  - Node.js with Express.js
  - MySQL as the database
- **Others**:
  - RESTful APIs for client-server communication

---






## Run Locally

Follow these steps to set up and run the project locally:

### **Prerequisites**
- Install [Node.js](https://nodejs.org/).
- Install [MySQL](https://dev.mysql.com/).

---


### Clone the project

```bash
  git clone https://github.com/im-sparrow05/AURO-assesment-skills-master.git
```

Go to the project directory

```bash
  cd AURO-assesment-skills-master
```

Go to the backend directory

```bash
  cd server
```

Install node dependencies

```bash
  npm install
```

Create a MySQL database:
   - Log in to MySQL:
     ```bash
     mysql -u root -p
     ```
   - Create a database:
     ```sql
     CREATE DATABASE auro_assessment;
     ```
   - Exit MySQL:
     ```bash
     exit
     ```

Set up environment variables:
   - Create a \`.env\` file in the `server` directory and add:
     ```env
     PORT=5000
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=<your-mysql-password>
     DB_NAME=auro_assessment
     JWT_SECRET = <your secret>
     ```

Start the backend server

```bash
  npm start
```

#### Now, our backend server is live on port 5000. Let deploy the frontend App

##### open a new terminal

Go to the project directory

```bash
  cd AURO-assesment-skills-master
```

Go to the frontend directory

```bash
  cd client
```

Install node dependencies

```bash
  npm install
```

Start the frontend server

```bash
  npm start
```

### Now, frontend is deployed on localhost, now our app is ready to use









## Usage

#### Once the client and server are running:
1. Open your browser and go to:
   \`\`\`
   http://localhost:3000
   \`\`\`
2. Use the platform to:
   - Take aptitude tests.
   - Solve coding challenges.
3. Submit your answers and review your progress.

---
## License

[MIT](https://choosealicense.com/licenses/mit/)

This project is licensed under the MIT License. See the LICENSE file for details.


<<<<<<< HEAD
MERN To-Do List Application
A full-stack to-do list application built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS. The app allows users to create, read, update, and delete tasks with a modern black-and-purple UI, featuring a glowing "Add Task" button and smooth transitions.
This project was developed as a college assignment to demonstrate proficiency in full-stack web development.
Features

Create Tasks: Add tasks with a title and optional description using a glowing form.
View Tasks: Display tasks in a responsive list with completion status.
Update Tasks: Edit task details or toggle completion status.
Delete Tasks: Remove tasks from the list and database.
Responsive UI: Black background with purple accents, featuring glow effects and animations.
Persistent Storage: Tasks are stored in MongoDB Atlas for cloud-based persistence.

Tech Stack

Frontend: React, Tailwind CSS (v3.4.17), Axios
Backend: Node.js, Express.js, Mongoose
Database: MongoDB Atlas
Environment: dotenv for configuration
Tools: npm, MongoDB Atlas for cloud database

Project Structure
todo-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.css
│   │   └── ...
│   ├── tailwind.config.js
│   ├── package.json
│   └── ...
├── README.md
└── .gitignore

Prerequisites

Node.js: v16 or later (check with node -v).
MongoDB Atlas: A free-tier account for cloud database storage.
Git: For version control (optional).
Text Editor: VS Code recommended.

Setup Instructions
1. Clone the Repository
git clone <repository-url>
cd todo-app

2. Backend Setup

Navigate to Backend:cd backend


Install Dependencies:npm install


Configure Environment:
Create a .env file in backend/:PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/tododb?retryWrites=true&w=majority


Replace <username>, <password>, and <cluster-name> with your MongoDB Atlas credentials.
Example:PORT=5000
MONGO_URI=mongodb+srv://prismhex:1234mnbvcxz@todoapp.l15lil1.mongodb.net/tododb?retryWrites=true&w=majority




MongoDB Atlas Configuration:
Log in to MongoDB Atlas.
Create a cluster (e.g., todoapp).
In Database Access, add a user (e.g., prismhex) with Atlas Admin privileges.
In Network Access, whitelist your IP address:
Add your current IP (curl https://ipinfo.io/ip) or 0.0.0.0/0 (less secure).


Copy the connection string from Database > Connect > Connect your application and update .env.


Start the Backend:npm start


Should output:Server running on port 5000
MongoDB Connected: todoapp.mongodb.net





3. Frontend Setup

Navigate to Frontend:cd ../frontend


Install Dependencies:npm install


Configure Tailwind CSS:
Ensure tailwind.config.js exists with:module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-card': '#2a2a2a',
        'purple-accent': '#6b46c1',
        'purple-hover': '#805ad5',
      },
    },
  },
  plugins: [],
}


Verify src/index.css includes Tailwind directives and custom glow animation:@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #1a1a1a;
  color: white;
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 10px rgba(107, 70, 193, 0.5); }
  50% { box-shadow: 0 0 20px rgba(107, 70, 193, 0.8); }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}




Start the Frontend:npm start


Opens http://localhost:3000 in your browser.



4. Verify Setup

Backend: Test the API:curl http://localhost:5000/api/tasks


Should return [] (empty array) or a list of tasks.


Frontend: Open http://localhost:3000. You should see a black-and-purple UI with a glowing "Add Task" button.
MongoDB Atlas: Check tododb.tasks collection for stored tasks.

Usage

Add a Task:
Enter a title and optional description in the form.
Click Add Task (glows on hover).
Task appears in the list.


View Tasks:
Tasks display with title, description, and completion status.


Edit a Task:
Click Edit, update details, and click Save.


Delete a Task:
Click Delete to remove a task.


Toggle Completion:
Check the checkbox to mark a task as complete (strikes through).



Troubleshooting

MongoDB Connection Errors:
Bad Auth: Verify MONGO_URI credentials in .env. Reset password in Atlas if needed.
IP Whitelist: Update Atlas Network Access with your current IP (curl https://ipinfo.io/ip).
Test connection:mongosh "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/tododb"




Delete Button Not Working:
Check browser console (F12 > Console) for errors.
Test API:curl -X DELETE http://localhost:5000/api/tasks/<task-id>




Styles Not Applying:
Ensure tailwind.config.js and index.css are correct.
Run npm install and restart frontend:npm install
npm start




CORS Errors:
Verify backend/server.js includes app.use(cors()).



Future Improvements

Real-Time Updates: Remove window.location.reload() in TaskForm.js and use state to update the task list.
Delete Confirmation: Add a confirmation dialog before deleting tasks.
Animations: Add fade-in effects for new tasks.
Authentication: Implement user login to manage personal task lists.
Deployment: Deploy to Render or Heroku with a production MongoDB Atlas cluster.

License
This project is for educational purposes and not licensed for commercial use.
Acknowledgments

Built as a college project to demonstrate MERN stack development.
Styled with Tailwind CSS for a modern UI.
Thanks to MongoDB Atlas for free-tier cloud database hosting.
=======
>>>>>>> d44a878b87d82e9a6bf292999aa1ef528202c92f


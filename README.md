🚀 MERN To-Do List: A Modern Task Manager
Welcome to the MERN To-Do List, a sleek and powerful full-stack application built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS. This project, crafted for a college assignment, delivers a seamless task management experience with a stunning black-and-purple UI, featuring glowing buttons and smooth animations. Create, update, and delete tasks effortlessly, all backed by cloud-based MongoDB Atlas storage.

✨ Features

Intuitive Task Management: Add, edit, delete, and mark tasks as complete with a few clicks.
Gorgeous UI: Black background with vibrant purple accents, including a glowing "Add Task" button with hover animations.
Responsive Design: Looks great on desktop and mobile devices.
Cloud Storage: Tasks persist in MongoDB Atlas for reliable data management.
Real-Time Updates: Instant feedback when managing tasks.
Smooth Animations: Subtle glow effects and transitions enhance the user experience.


🛠️ Tech Stack



Component
Technology



Frontend
React, Tailwind CSS (v3.4.17), Axios


Backend
Node.js, Express.js, Mongoose


Database
MongoDB Atlas (Cloud)


Configuration
dotenv


Tools
npm, Git, VS Code



📂 Project Structure
todo-app/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/         # Express API routes
│   ├── server.js       # Backend entry point
│   ├── .env            # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/ # React components (TaskForm, TaskList, TaskItem)
│   │   ├── App.js      # Main React component
│   │   └── index.css   # Tailwind styles with custom animations
│   ├── tailwind.config.js
│   └── package.json
├── README.md
└── .gitignore


⚙️ Setup Instructions
Follow these steps to run the app locally. You’ll need Node.js (v16+) and a MongoDB Atlas account.
1. Clone the Project
git clone <your-repository-url>
cd todo-app

2. Configure MongoDB Atlas

Sign up/log in to MongoDB Atlas.
Create a free-tier cluster (e.g., named todoapp).
Database Access:
Add a user (e.g., username: prismhex, password: <your-password>).
Assign Atlas Admin role.


Network Access:
Whitelist your IP address:
Run curl https://ipinfo.io/ip to get your IP.
Add it in Atlas > Network Access > IP Access List.
Alternatively, use 0.0.0.0/0 for testing (less secure).




Get the connection string:
In Database > Connect > Connect your application.
Copy the URI (e.g., mongodb+srv://prismhex:<password>@todoapp.l15lil1.mongodb.net/tododb).



3. Backend Setup

Navigate to the backend:
cd backend


Install dependencies:
npm install


Create .env file:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/tododb?retryWrites=true&w=majority


Replace <username>, <password>, and <cluster-name> with your Atlas details.

Example:
PORT=5000
MONGO_URI=mongodb+srv://prismhex:<your-password>@todoapp.l15lil1.mongodb.net/tododb?retryWrites=true&w=majority




Start the backend:
npm start


Expected output:
Server running on port 5000
MongoDB Connected: todoapp.mongodb.net





4. Frontend Setup

Navigate to the frontend:
cd ../frontend


Install dependencies:
npm install


Verify Tailwind CSS:

tailwind.config.js defines custom colors:
theme: {
  extend: {
    colors: {
      'dark-bg': '#1a1a1a',
      'dark-card': '#2a2a2a',
      'purple-accent': '#6b46c1',
      'purple-hover': '#805ad5',
    },
  },
}


src/index.css includes Tailwind and glow animation:
@keyframes glow {
  0%, 100% { box-shadow: 0 0 10px rgba(107, 70, 193, 0.5); }
  50% { box-shadow: 0 0 20px rgba(107, 70, 193, 0.8); }
}




Start the frontend:
npm start


Opens http://localhost:3000 in your browser.



5. Test the App

Backend API: Verify with:
curl http://localhost:5000/api/tasks


Returns [] or a list of tasks.


Frontend UI: Visit http://localhost:3000 to see the glowing to-do list.



🎮 Usage

Add Tasks:
Enter a title and optional description.
Click the glowing Add Task button (scales and glows on hover).


Manage Tasks:
Edit: Update task details.
Delete: Remove tasks instantly.
Complete: Toggle completion with a checkbox.


Enjoy the UI:
Sleek black background, purple accents, and pulsating glow effects.




🐞 Troubleshooting

MongoDB Errors:
Bad Auth: Check MONGO_URI credentials. Reset password in Atlas if needed.
IP Whitelist: Update Atlas Network Access with your current IP.
Test connection: mongosh "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/tododb".


UI Issues:
Verify tailwind.config.js and index.css.
Run npm install and restart frontend.


API Errors:
Check browser console (F12 > Console).
Test endpoints: curl -X DELETE http://localhost:5000/api/tasks/<task-id>.




🚀 Future Enhancements

Real-Time Task Updates: Eliminate page reloads with state management.
User Authentication: Add login for personalized task lists.
Task Categories: Organize tasks by priority or type.
Deployment: Host on Render or Vercel for public access.


📜 License
This project is for educational purposes and not licensed for commercial use.

🙌 Acknowledgments

Purpose: Built as a college project to showcase full-stack development skills.
Inspiration: Modern UI design with Tailwind CSS.
Thanks: MongoDB Atlas for free cloud hosting and the MERN stack community.


⭐ Star this project if you find it useful!Happy task managing! 🎉

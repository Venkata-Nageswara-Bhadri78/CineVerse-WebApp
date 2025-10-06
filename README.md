## PROJECT SETUP INSTRUCTIONS

#### ENVIRONMENT SETUP

### 🔑 Environment Setup
Create a `.env` file inside the `backend` folder using the template below:

```
PORT=3000
TMDB_API_KEY=ADD_YOUR_API_KEY_HERE
TMDB_BASELINK=https://api.themoviedb.org/3
```
Refer to `backend/.env.example` for this required keys.
- Replace `TMDB_API_KEY`, with your own API Keys

### Project Setup Instructions

#### 1. Clone the repo
```
git clone https://github.com/Venkata-Nageswara-Bhadri78/CineVerse-WebApp.git
cd CineVerse-WebApp.git
```

#### 2. Setup Backend
Open terminal and move to backend `cd backend` and run below commands
- Here you have to do the environment setup and the run below commands
```
npm install
npm start
```

- This will print the output
```
Server running on port 3000
```

Means the backend setup is **SUCESS**.

#### 3. Setup Frontend
- Open a new terminal tab
- Move to frontend `cd frontend/Frontend-React-Movies-App` and run below commands
```
npm install
npm run dev
```


#### 4. Open and Explore the App

- This will start the local server at http://localhost:5173/
- Open the local server and explore the project
# Interactive Autism Learning Platform

An interactive web application designed for non-verbal autistic children, featuring a custom video player and analytics dashboard. The platform helps track and analyze children's engagement patterns and learning preferences through video interactions.

## Project Structure
```
project-root/
├── client/                # React frontend
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # React components
│       ├── hooks/         # Custom hooks
│       ├── pages/         # Page components
│       ├── redux/         # Redux state management
│       ├── services/      # External services
│       ├── types/         # TypeScript types
│       └── utils/         # Utility functions
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # Express routes
│   ├── services/          # Business logic
│   └── utils/             # Utility functions
├── shared/                # Shared TypeScript interfaces
│   └── types/             # Shared type definitions
├── push.bat               # Git push automation script
└── start.bat              # Project startup script
```

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **State Management**: Redux
- **Machine Learning**: TensorFlow.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arsaland/interactive-autism-learning-platform.git
   cd interactive-autism-learning-platform
   ```

2. **Install dependencies**

   - Install client dependencies
     ```bash
     cd client
     npm install
     ```

   - Install server dependencies
     ```bash
     cd ../server
     npm install
     ```

3. **Set up environment variables**

   - In the server directory
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` with your configuration

4. **Start the development servers**

   - Start the backend server
     ```bash
     cd server
     npm run dev
     ```

   - In a new terminal, start the frontend
     ```bash
     cd client
     npm start
     ```


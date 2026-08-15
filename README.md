# Syncdin AI

Syncdin AI is an AI-powered career preparation platform designed to help job seekers improve resumes, generate cover letters, prepare for interviews, and practice coding challenges using intelligent automation. This project was developed as an internship-focused application to demonstrate real-world use of AI tools in recruitment and career growth workflows.

## Project Overview

The platform combines a modern React frontend with an Express backend to provide a complete career support experience. It helps users:

- Upload and analyze resumes against job descriptions
- Check ATS compatibility and identify missing skills
- Generate professional cover letters
- Practice technical, HR, and behavioral interview questions
- Solve coding interview questions with AI-generated explanations
- Evaluate interview answers and receive feedback

## Key Features

### Resume Analysis
- Upload resume PDFs
- Extract text from uploaded documents
- Compare resume content with a job description
- Identify skills match and missing skills
- Calculate ATS score using keyword-based evaluation
- Generate AI-based insights for resume improvement

### Cover Letter Generation
- Create a professional cover letter using user experience and role details
- Produce ATS-friendly content tailored to hiring requirements

### Interview Preparation
- Generate technical, HR, and behavioral interview questions
- Support different interview categories and role-specific preparation
- Evaluate user answers and provide structured feedback

### Coding Practice
- Generate coding interview questions by difficulty, role, and language
- Provide solution explanations and time/space complexity analysis
- Run AI-based output prediction for code snippets

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- Groq SDK
- Multer
- PDF parsing
- dotenv

## Project Structure

```bash
syncdin-ai/
├── src/                  # React application
│   ├── components/       # Reusable UI sections
│   ├── pages/            # Application pages
│   ├── App.jsx           # Main routing setup
│   └── main.jsx          # App entry point
├── server/               # Express backend
│   ├── index.js          # API server and AI logic
│   └── package.json      # Backend dependencies
├── public/               # Static assets
├── package.json          # Frontend dependencies and scripts
├── vite.config.js        # Vite config
├── index.html            # App entry HTML
├── .gitignore            # Git exclusions
├── README.md             # Project documentation
└── package-lock.json     # Dependency lock file
```

## Prerequisites

Before running the project locally, make sure you have:

- Node.js (v18 or above recommended)
- npm or yarn
- A Groq API key for AI-powered features

## Environment Setup

Create a `.env` file inside the `server` directory:

```env
GROQ_API_KEY=your_groq_api_key_here
```

## Installation

1. Clone the repository
2. Install frontend dependencies:

```bash
npm install
```

3. Install backend dependencies:

```bash
cd server
npm install
```

## Running the Project

### Start the backend

```bash
cd server
npm run dev
```

The backend runs on:

- https://syncdin-ai.onrender.com

### Start the frontend

From the root directory:

```bash
npm run dev
```

The frontend runs on:

- http://localhost:5173

## Main API Endpoints

The backend exposes the following endpoints:

- `POST /upload` - Upload and analyze a resume
- `POST /cover-letter` - Generate a cover letter
- `POST /interview` - Generate interview questions
- `POST /coding-practice` - Generate coding interview questions
- `POST /solve-question` - Solve a coding problem
- `POST /evaluate-answer` - Evaluate interview responses
- `POST /run-code` - Predict code output

## Use Case

This project is designed for internship and portfolio demonstration purposes. It showcases how AI can be integrated into real-world hiring workflows, especially in:

- Recruitment automation
- Candidate assessment
- Career guidance
- Personalized job preparation

## Future Enhancements

- User authentication and database integration
- Save user profiles and resume history
- PDF export for generated resumes and cover letters
- Multilingual support
- Better AI scoring and more advanced ATS matching
- Deployment on cloud hosting platforms

## Project Goal

The main objective of Syncdin AI is to reduce the gap between preparation and opportunity by giving users a smart, guided platform for career readiness using AI-powered insights.
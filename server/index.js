const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
require("dotenv").config();
const path = require("path");

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ================= Gemini AI =================
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


// ================= Express =================

const app = express();

app.use(cors());
app.use(express.json());

// ================= Multer =================

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ================= Home =================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Backend Running Successfully!",
  });
});

// ================= Upload Resume =================

app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    console.log("========== REQUEST RECEIVED ==========");

    if (!req.file) {
      console.log("❌ No file received");

      return res.status(400).json({
        success: false,
        message: "No Resume Uploaded",
      });
    }

    console.log("📄 File:", req.file);

    console.log("Reading PDF...");
    const pdfBuffer = fs.readFileSync(req.file.path);

    console.log("PDF Size:", pdfBuffer.length);

    console.log("Parsing PDF...");
    const pdfData = await pdfParse(pdfBuffer);

    console.log("✅ PDF Parsed");

    const resumeText = pdfData.text;
    const jobDescription = req.body.jobDescription || "";

    const skills = [
      "Java",
      "Python",
      "JavaScript",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "SQL",
      "HTML",
      "CSS",
      "Git",
      "Docker",
      "AWS",
      "Machine Learning",
      "AI",
      "TensorFlow",
      "C++",
    ];

    const foundSkills = skills.filter((skill) =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    const missingSkills = skills.filter(
      (skill) => !foundSkills.includes(skill)
    );
// ================= ATS SCORE =================

const jdText = jobDescription.toLowerCase();
const resumeLower = resumeText.toLowerCase();

const jdKeywords = [
  "javascript",
  "react",
  "html",
  "css",
  "node",
  "express",
  "rest api",
  "git",
  "github",
  "sql",
  "mongodb",
  "docker",
  "aws",
  "python",
  "java",
  "machine learning",
  "ai",
  "tensorflow",
  "c++",
];

const requiredSkills = jdKeywords.filter((skill) =>
  jdText.includes(skill)
);

const matchedSkills = requiredSkills.filter((skill) =>
  resumeLower.includes(skill)
);

let atsScore = 0;

if (requiredSkills.length > 0) {
  atsScore = Math.round(
    (matchedSkills.length / requiredSkills.length) * 100
  );
} else {
  atsScore = 50;
}

atsScore = Math.max(0, Math.min(100, atsScore));

console.log("========== ATS SCORE ==========");
console.log("Required Skills:", requiredSkills);
console.log("Matched Skills:", matchedSkills);
console.log("ATS Score:", atsScore);

console.log("========== RESUME TEXT ==========");
console.log(resumeText);
    // ================= Gemini AI Analysis =================

const prompt = `
You are an expert ATS Resume Analyzer.

Compare the candidate's resume with the given Job Description.

Return your response in this format:

# Resume Match Score
(Give a score out of 100)

# Matching Skills
(List matching skills)

# Missing Skills
(List skills missing from the resume)

# Resume Strengths
(List strengths)

# Resume Weaknesses
(List weaknesses)

# Suggestions to Improve Resume
(Give actionable suggestions)

# Interview Questions
(Provide 5 interview questions based on the Job Description)

==========================
JOB DESCRIPTION
==========================

${jobDescription}

==========================
RESUME
==========================

${resumeText}
`;
console.log("Sending request to Groq...");
console.log("Groq response received");
const chatCompletion = await groq.chat.completions.create({
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
  model: "llama-3.3-70b-versatile",
});

const aiAnalysis = chatCompletion.choices[0].message.content;
    res.json({
  success: true,
  atsScore,
  foundSkills,
  missingSkills,
  resumeText,
  aiAnalysis,
  filename: req.file.filename,
});

  } catch (err) {

    console.log("\n================ ERROR ================\n");

    console.error(err);

    console.log("\nMessage:");
    console.log(err.message);

    console.log("\nStack:");
    console.log(err.stack);

    console.log("\n=======================================\n");

    res.status(500).json({
      success: false,
      message: "Resume Parsing Failed",
      error: err.message,
    });
  }
});
// ================= Cover Letter Generator =================

app.post("/cover-letter", async (req, res) => {
  try {
    const {
      name,
      role,
      company,
      skills,
      experience,
      additionalInfo,
    } = req.body;

    const prompt = `
You are an expert HR Recruiter.

Write a professional ATS-friendly cover letter.

Candidate Details

Name: ${name}

Job Role: ${role}

Company: ${company}

Skills: ${skills}

Experience: ${experience}

Additional Information:
${additionalInfo}

Instructions:

- Write a professional cover letter.
- Keep it around 300–400 words.
- Start with "Dear Hiring Manager,"
- End professionally.
- Return only the cover letter.
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const coverLetter =
      chatCompletion.choices[0].message.content;

    res.json({
      success: true,
      coverLetter,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Cover Letter Generation Failed",
    });
  }
});
app.post("/interview", async (req, res) => {
  console.log("🎤 Interview API Called");
  console.log(req.body);

  try {
    const {
      jobRole,
      experience,
      interviewType
    } = req.body;

    const prompt = `
You are an expert technical interviewer and HR interviewer.

Generate 10 realistic interview questions for the candidate.

Job Role:
${jobRole}

Experience:
${experience}

Interview Type:
${interviewType}

Follow these rules:

If Interview Type is Technical:
- Generate 10 technical questions.
- Focus on technologies, programming, projects and problem solving.

If Interview Type is HR:
- Generate 10 HR questions.
- Focus on introduction, strengths, weaknesses, teamwork, career goals and company-related questions.

If Interview Type is Behavioral:
- Generate 10 behavioral questions.
- Focus on teamwork, leadership, conflict resolution, challenges and real-life situations.

If Interview Type is Mixed:
- Generate:
  5 Technical Questions
  3 HR Questions
  2 Scenario Based Questions

Return only the questions.
Number every question from 1 to 10.
Do not provide answers.
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const questions =
      chatCompletion.choices[0].message.content;

    console.log("========== INTERVIEW QUESTIONS ==========");
    console.log(questions);
    console.log("=========================================");

    res.json({
      success: true,
      questions,
    });

  } catch (err) {

    console.log("Interview Error:", err);

    res.status(500).json({
      success: false,
      message: "Interview Question Generation Failed",
      error: err.message,
    });
  }
});
app.post("/coding-practice", async (req, res) => {
  console.log("Coding Practice API Called");

  try {
    const { role, difficulty, language, count, company } = req.body;
    const prompt = `
You are an expert coding interviewer.

Generate exactly ${count} coding interview questions.

Target Company: ${company}

Job Role: ${role}

Programming Language: ${language}

Difficulty: ${difficulty}

Return ONLY valid JSON.

Format:

[
  {
    "question":"...",
    "problem":"...",
    "input":"...",
    "output":"...",
    "hint":"...",
    "timeComplexity":"...",
    "spaceComplexity":"..."
  }
]

Do not return markdown.

Do not use \`\`\`.

Return JSON only.
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const aiResponse = chatCompletion.choices[0].message.content;
    console.log("========== AI RESPONSE ==========");
console.log(aiResponse);
console.log("================================");
    console.log(aiResponse);

let questions;

try {
  questions = JSON.parse(aiResponse);
} catch (e) {
  console.log("AI Response:");
  console.log(aiResponse);

  return res.status(500).json({
    success: false,
    message: "Invalid JSON returned by AI",
  });
}

    res.json({
      success: true,
      questions,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Coding Question Generation Failed",
    });
  }
});
// ================= Start Server =================
app.post("/solve-question", async (req, res) => {
  console.log("🤖 Solve Question API Called");

  try {
    const { question, language } = req.body;

    console.log("Question Received:", question);
console.log("Language:", language);

    const prompt = `
You are an expert software engineer.

Solve the following coding interview question.

Programming Language:
${language}

Question:
${question}

Return your response in this format.

Solution Code

Explanation

Time Complexity

Space Complexity

Do not skip any section.
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const solution =
      chatCompletion.choices[0].message.content;

    res.json({
      success: true,
      solution,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Solution Generation Failed",
    });
  }
});
// ================= Evaluate Interview Answer =================

app.post("/evaluate-answer", async (req, res) => {
  console.log("🤖 Evaluate Answer API Called");

  try {
    const { question, answer, jobRole, interviewType } = req.body;

    if (!question || !answer) {
      return res.status(400).json({
        success: false,
        message: "Question and answer are required.",
      });
    }

    const prompt = `
You are an expert interviewer.

Evaluate this candidate's interview answer.

Job Role:
${jobRole}

Interview Type:
${interviewType}

Question:
${question}

Candidate Answer:
${answer}

Give feedback in this format:

Score: X/10

What You Did Well:
- Point 1
- Point 2

What You Missed:
- Point 1
- Point 2

How To Improve:
- Point 1
- Point 2

Better Answer:
Give a better example answer.

Keep the feedback simple and useful for a fresher.
`;

    const chatCompletion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

    const feedback =
      chatCompletion.choices[0].message.content;

    res.json({
      success: true,
      feedback,
    });

  } catch (err) {
    console.log("Evaluation Error:", err);

    res.status(500).json({
      success: false,
      message: "Answer Evaluation Failed",
    });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

app.post("/run-code", async (req, res) => {
  console.log("🚀 Run Code API Called");

  try {
    const { code, language } = req.body;

    const prompt = `
You are an expert compiler.

Programming Language:
${language}

Predict the output of the following code.

Code:
${code}

Return ONLY JSON.

{
  "output":"..."
}
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
    let aiResponse = chatCompletion.choices[0].message.content;

console.log(aiResponse);

aiResponse = aiResponse
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const output = JSON.parse(aiResponse);

res.json(output);

    

  } catch (err) {
    console.log(err);

    res.status(500).json({
      output: "Execution Failed",
    });
  }
});
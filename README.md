
## Acknowledgements

 We would like to express our sincere gratitude to everyone who supported and contributed to the success of this project during the Hack Horizon hackathon.

Thanks to the entire team for their dedication, creativity, and collaborative spirit, which played a crucial role in developing and refining our solution.

We are grateful to the Hack Horizon organizing committee for creating an inspiring platform that encouraged innovation and problem-solving.

Appreciation goes to our college and mentors for their continuous support and motivation throughout the process.

We also acknowledge the open-source community and the developers behind the tools and libraries that powered our project.

Finally, a big thank you to everyone who provided feedback and encouragement—your input helped us improve and grow.

This milestone marks just the beginning, and we look forward to evolving our application even further!

## API Reference

#### Register user

```http
  POST /api/user/register
```
{
  "success": true,
  "token": "jwt_token",
  "_id": "user_id"
}

#### User Login

```http
  POST /api/user/login
```
{
  "success": true,
  "token": "jwt_token",
  "_id": "user_id"
}

#### Skills Management
```http
  POST  /api/user/skills
```
{
  "success": true,
  "message": "Skill added",
  "user": {
    // updated user object
  }
}

#### Get Registered Skills
```http
  POST  /api/user/skills
```
{
  "skills": ["React.js", "Node.js"]
}


#### AI based learning tools
```http
  POST /api/user/roadmap
```
{
  "roadmap": "Step-by-step roadmap content...",
  "updatedUser": {
    // user with updated roadmap field
  }
}

#### Generate Project Ideas
```http
  POST /api/user/project
```
{
  "projects": "List of AI-generated project ideas...",
  "updatedUser": {
    // user with updated projects field
  }
}

#### Project Guidance
```http
  POST api/user/inBrief
```
{
  "projects": "Detailed AI guidance on implementing the project"
}











## Demo
https://drive.google.com/file/d/1CKSC5rEZLG6TW_Cc73DhFtwYxVKQeZoX/view?usp=sharing
## Documentation

📘 Documentation
🧠 Problem Statement
Many students struggle with practically applying their knowledge and often lack the right guidance to specialize in a specific field. There's a clear gap between learning and doing.

🚀 Our Solution
We developed an intelligent application that helps bridge this gap. By simply selecting your field of interest (e.g., Web Development), the app provides:

✅ A detailed, step-by-step learning roadmap

✅ Curated and relevant project ideas

✅ Hands-on guidance on how to approach and complete those projects

This allows users to not only learn but also build confidently, with AI-driven assistance along the way.

## Features

🌟 Features
🎯 Personalized Learning Experience
Get a customized roadmap based on your selected field (e.g., Web Development, Data Science).

No generic tutorials—only focused, curated paths to help you master the skill.

💡 AI-Generated Project Ideas
Receive relevant project suggestions tailored to your skill area.

Ideas range from beginner-friendly to advanced-level implementations.

📘 Step-by-Step Project Guidance
Understand how to build each project with stepwise AI-generated guidance.

Clear instructions on tools, tech stack, and best practices.

🧠 Built-in Intelligence with Gemini AI
Leverages Google’s Gemini API to generate accurate, practical, and relevant responses.

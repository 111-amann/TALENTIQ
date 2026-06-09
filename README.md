# ⚡ Talent IQ — Code Together

A real-time collaborative coding interview platform where developers can practice together with live video calls, shared code execution, and instant chat.

🔗 **Live Demo:** [talentiq-amann.xyz](https://talentiq-amann.xyz)
💻 **GitHub:** [github.com/111-amann/TALENTIQ](https://github.com/111-amann/TALENTIQ)

---

## 📸 Preview

![TalentIQ Dashboard](https://talentiq-amann.xyz/screenshot.png)
![TalentIQ Session](https://talentiq-amann.xyz/screenshot2.png)

---

## ✨ Features

- 🔐 **Authentication** — Secure sign up / sign in via Clerk
- 🎥 **Live Video Calls** — 1-on-1 video sessions powered by Stream Video SDK
- 💬 **Real-time Chat** — In-session messaging with Stream Chat
- 👨‍💻 **Collaborative Code Editor** — Monaco Editor with syntax highlighting for JavaScript, Python, and Java
- ▶️ **Code Execution** — Run code live via Glot.io API (free, no rate limits)
- 🧩 **10 LeetCode-style Problems** — Easy, Medium, and Hard problems across arrays, strings, and dynamic programming
- 📊 **Dashboard** — View active sessions, join live rooms, and track past sessions
- 🏠 **Session Management** — Create, join, and end coding sessions with real-time status updates
- 🔗 **Webhook Pipeline** — Clerk → Inngest → MongoDB user sync via verified svix webhooks
- 🎉 **Test Validation** — Confetti animation when all test cases pass
- 📱 **Responsive UI** — Clean dark theme built with TailwindCSS + DaisyUI

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite 7 | Build Tool |
| TailwindCSS 4 + DaisyUI | Styling |
| React Router 7 | Client-side Routing |
| TanStack Query 5 | Server State Management |
| Axios | HTTP Client |
| Monaco Editor | Code Editor |
| Stream Video React SDK | Video Calls |
| Stream Chat React | Real-time Chat |
| Clerk React | Authentication |
| React Resizable Panels | Resizable Layout |
| React Hot Toast | Notifications |
| Lucide React | Icons |
| Canvas Confetti | Celebration Animation |
| date-fns | Date Formatting |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API Server |
| MongoDB + Mongoose | Database |
| Clerk Express | Auth Middleware |
| Svix | Webhook Signature Verification |
| Stream Node SDK | Video Call Management |
| Stream Chat | Chat Channel Management |
| Inngest | Event-driven Background Functions |
| Glot.io API | Code Execution |
| dotenv | Environment Variables |
| Nodemon | Dev Hot Reload |

### Services & Deployment
| Service | Purpose |
|---|---|
| Clerk | User Authentication |
| Stream | Video + Chat Infrastructure |
| MongoDB Atlas | Cloud Database |
| Inngest | Background Job Processing |
| Glot.io | Free Code Execution API |
| Render | Backend Hosting |
| Netlify | Frontend Hosting |
| GoDaddy | Custom Domain |

---

## 🔗 Webhook Architecture

User signup triggers a fully verified event pipeline:

```
User signs up
    → Clerk fires user.created event
    → POST /api/webhooks/clerk (svix signature verified)
    → Inngest receives clerk/user.created
    → sync-user function runs
    → User created in MongoDB + Stream
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Clerk account
- Stream account
- Inngest account
- Glot.io account

### 1. Clone the repository
```bash
git clone https://github.com/111-amann/TALENTIQ.git
cd TALENTIQ
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=3000
DB_URL=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
NODE_ENV=development

# Clerk
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_signing_secret

# Stream
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Glot.io
GLOT_API_TOKEN=your_glot_api_token
```

```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:3000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
```

```bash
npm run dev
```

### 4. Setup Clerk Webhook

In your Clerk Dashboard → Webhooks → Add Endpoint:
- URL: `https://your-backend-url.onrender.com/api/webhooks/clerk`
- Events: `user.created`, `user.deleted`

### 5. Open the app
Visit `http://localhost:5173`

---

## 📁 Project Structure

```
TALENTIQ/
├── frontend/
│   ├── src/
│   │   ├── api/          # API call functions
│   │   ├── components/   # Reusable UI components
│   │   ├── data/         # Problems data
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Axios, Stream, Glot config
│   │   └── pages/        # Page components
│   └── public/
└── backend/
    └── src/
        ├── controllers/  # Route handlers
        ├── libs/         # DB, Stream, Inngest, Env config
        ├── middleware/   # Auth middleware (protectRoute)
        ├── models/       # Mongoose schemas
        └── routes/       # Express routes
```

---

## 🔑 Environment Variables

| Variable | Where | Description |
|---|---|---|
| `CLERK_SECRET_KEY` | Backend | Clerk server-side key |
| `CLERK_WEBHOOK_SECRET` | Backend | Clerk webhook signing secret (`whsec_...`) |
| `VITE_CLERK_PUBLISHABLE_KEY` | Frontend | Clerk client-side key |
| `STREAM_API_KEY` | Both | Stream API key |
| `STREAM_API_SECRET` | Backend | Stream API secret |
| `VITE_STREAM_API_KEY` | Frontend | Stream API key (client) |
| `GLOT_API_TOKEN` | Backend | Glot.io code execution token |
| `DB_URL` | Backend | MongoDB Atlas connection string |
| `INNGEST_EVENT_KEY` | Backend | Inngest event key |
| `INNGEST_SIGNING_KEY` | Backend | Inngest signing key |
| `CLIENT_URL` | Backend | Frontend URL for CORS |
| `VITE_API_URL` | Frontend | Backend API base URL |

---

## 📝 License

MIT License — feel free to use this project for learning and portfolio purposes.

---

<div align="center">
  Built with ❤️ by <a href="https://github.com/111-amann">Aman</a>
</div>

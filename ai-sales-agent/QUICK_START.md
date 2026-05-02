# Quick Start Guide - AI Sales Agent

## 🚀 Installation & Running

### Step 1: Backend Setup
```bash
cd backend
pip install -r requirements.txt
# Set up .env with GEMINI_API_KEY
uvicorn main:app --reload
```
Backend runs on: `http://localhost:8000`

### Step 2: Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:3000`

### Step 3: Test the App
1. Open `http://localhost:3000`
2. Click "Get Started" → Dashboard
3. Fill in lead form with a business
4. Click "Create Lead"
5. Click "Analyze" button
6. Wait for AI analysis
7. View full report with Pitch & Call Script

---

## 📊 What Gets Generated

When you click "Analyze", the AI generates:

### ✅ Social Media Analysis
- Overall presence score (0-100)
- Branding quality assessment
- Content quality evaluation
- Engagement potential
- Lead generation capability analysis

### ✅ Weaknesses (5-7 items)
- Content strategy gaps
- Missing CTAs
- Branding issues
- Engagement problems
- Lead generation gaps

### ✅ Opportunities
- Lead generation strategies
- Brand visibility improvements
- Content optimization tips
- Conversion tactics
- Marketing automation ideas

### ✅ Sales Pitch
- Personalized 60-90 word pitch
- References their specific situation
- Professional, friendly tone
- Ready to use in emails or calls

### ✅ Cold Call Script
- Full professional script
- Greeting + introduction
- Personalized observation
- Value proposition
- 2-3 objection handling responses
- Meeting booking question
- Formatted for easy delivery

### ✅ Final Report
- Executive summary
- Market positioning
- Key recommendations
- Implementation roadmap
- Success metrics
- Next steps

---

## 💡 Pro Tips

### For Sales Teams
1. Analyze leads before outreach
2. Copy the pitch for email campaigns
3. Use call script for cold calling
4. Review weaknesses to find pain points
5. Reference opportunities as solutions

### For Marketing
1. Benchmark against competitors
2. Identify industry trends from weaknesses
3. Use insights for content strategy
4. Find upsell opportunities

### For Agencies
1. Generate client reports
2. Create custom strategies
3. Export reports for presentations
4. Build relationship with data-driven insights

---

## 🎯 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/` | Health check |
| POST | `/leads/` | Create lead |
| GET | `/leads/` | Get all leads |
| GET | `/leads/{id}` | Get lead details |
| POST | `/analysis/{id}` | Analyze lead |
| POST | `/pitch/` | Generate pitch |
| POST | `/calls/script` | Generate script |

---

## 🔧 Configuration

**.env.local** (Frontend)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**.env** (Backend)
```
GEMINI_API_KEY=sk-proj-xxxxx
DATABASE_URL=sqlite:///./test.db
ENVIRONMENT=development
```

---

## 📁 Project Structure

```
ai-sales-agent/
├── frontend/                 # Next.js app
│   ├── src/
│   │   ├── app/             # Pages
│   │   ├── components/      # UI components
│   │   ├── services/        # API calls
│   │   └── utils/           # Helpers
│   └── package.json
│
├── backend/                 # FastAPI app
│   ├── api/                 # Route handlers
│   ├── langgraph_agent/    # AI workflow
│   ├── services/            # Business logic
│   ├── database/            # DB models
│   ├── main.py             # Server entry
│   └── requirements.txt
│
└── docs/                    # Documentation
```

---

## 🐛 Troubleshooting

**Q: "Module not found" error**
A: Run `npm install` in frontend, ensure jsconfig.json exists

**Q: API connection error**
A: Ensure backend is running, check .env.local API_URL

**Q: Gemini API error**
A: Check GEMINI_API_KEY in .env, verify API is enabled

**Q: Analysis taking too long**
A: Normal for first analysis (AI processing), subsequent calls are faster

---

## 📞 Next Steps

1. ✅ Run both servers
2. ✅ Create a few test leads
3. ✅ Analyze them to see AI in action
4. ✅ Copy pitches and scripts for actual use
5. ✅ Export reports for presentations

---

## 🎉 You're All Set!

Your AI Sales Agent is ready to:
- Analyze businesses in seconds
- Generate personalized pitches
- Create professional call scripts
- Identify growth opportunities
- Improve sales conversion

**Happy selling! 🚀**

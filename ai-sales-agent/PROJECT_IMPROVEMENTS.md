# AI Sales Agent - Professional Edition

## 🎯 Project Overview

A complete AI-powered sales intelligence platform that analyzes businesses' social media presence and generates professional sales strategies using **FastAPI + Gemini AI + LangGraph** backend with a **Next.js** frontend.

---

## ✨ Key Features Implemented

### 1. **Professional Analysis Framework**
- **Social Media Analysis**: Comprehensive evaluation of online presence, branding, content quality, and engagement
- **Scoring System**: Objective rating out of 100 based on multiple factors
- **Weakness Identification**: Detailed analysis of 5-7 key weaknesses with actionable insights
- **Opportunity Mapping**: Concrete business growth strategies tailored to each lead

### 2. **AI-Powered Sales Tools**
- **Personalized Sales Pitch**: Short, compelling pitches (60-90 words) personalized for each business
- **Cold Call Script**: Professional, formatted scripts with objection handling and closing techniques
- **Executive Summary Report**: Comprehensive final report with market positioning and implementation roadmap

### 3. **Professional Frontend**
- Modern SaaS-style dashboard with Tailwind CSS
- Responsive design (desktop, tablet, mobile)
- Professional color scheme (black, white, gray, blue accents)
- Real-time loading states and error handling
- Copy-to-clipboard functionality for sales materials
- Export reports as text files

### 4. **Backend AI Integration**
- Advanced prompt engineering for professional outputs
- Structured data flow using LangGraph
- Real-time AI analysis using Google Gemini API
- Database storage of all analysis results

---

## 📊 System Architecture

```
Frontend (Next.js 14)
├── Pages: Dashboard, Leads, Lead Details, Analysis, Settings
├── Components: Navbar, Sidebar, LeadForm, LeadTable, AnalysisCard, PitchCard, CallScriptCard
├── Services: API integration, Lead management, Analysis creation
└── Styling: Tailwind CSS + Global CSS

Backend (FastAPI + LangGraph)
├── APIs: Lead CRUD, Analysis, Pitch, Call Script endpoints
├── LangGraph Agent: Multi-step analysis workflow
├── Services: Gemini AI integration, Data processing
└── Database: Lead storage and history

Communication: REST API on localhost:8000
```

---

## 🚀 Getting Started

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
# .env file should contain:
# - GEMINI_API_KEY=your_api_key
# - DATABASE_URL=your_db_url

# Run the server
uvicorn main:app --reload
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

---

## 📝 Workflow

### 1. **Create a Lead**
- Go to Dashboard
- Fill in lead information (business name, industry, website, social link, followers, recent posts)
- Click "Create Lead"

### 2. **Analyze Lead**
- Click "Analyze" button on any lead
- System processes data and generates:
  - Social media analysis with score
  - Key weaknesses (5-7 items)
  - Business opportunities
  - Sales pitch
  - Call script
  - Final report

### 3. **View Analysis**
- Click "View" to see full lead details
- Review professional analysis report
- Generate or regenerate sales pitch
- Generate or regenerate call script
- Copy materials to clipboard
- Export full report

---

## 🎨 Professional Output Examples

### Analysis Report Includes:
- **Online Presence**: Quality assessment of profiles and branding
- **Content Analysis**: Quality, frequency, and engagement evaluation
- **Engagement Assessment**: Audience interaction levels
- **Lead Generation**: Current capability and gaps
- **Competitive Positioning**: Market benchmarking
- **Score**: Out of 100

### Weaknesses Section:
- Content strategy gaps
- Lack of clear CTAs
- Branding inconsistencies
- Poor engagement mechanisms
- Missing lead generation systems

### Opportunities Section:
- Lead generation strategies
- Brand visibility improvements
- Content optimization
- Engagement tactics
- Conversion optimization
- Marketing automation solutions

### Sales Pitch:
- 3-4 sentences, 60-90 words
- Personalized to their specific situation
- Professional yet friendly tone
- Clear value proposition
- Call-to-action included

### Call Script:
- Greeting & introduction
- Personalized observation
- Value proposition
- Conversation triggers
- Objection handling (2-3 responses)
- Meeting booking question
- Natural, professional tone

---

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS
- **Fetch API** - HTTP requests
- **JavaScript JSX** - UI components

### Backend
- **FastAPI** - Modern Python API framework
- **LangGraph** - Multi-step AI workflows
- **Google Gemini** - AI model for analysis
- **SQLAlchemy** - Database ORM
- **Pydantic** - Data validation

### Database
- PostgreSQL or SQLite for storage
- Stores leads, analysis, and history

---

## 📱 Features by Page

### Dashboard
- Summary cards: Total leads, Analyzed, New, Closed
- Lead creation form
- Recent leads table with Analyze/View buttons

### Leads Page
- Full leads list with filters
- Quick analysis button
- View individual lead details

### Lead Detail Page
- Complete business information
- Professional analysis report with score
- Weaknesses and opportunities
- Generate sales pitch (with copy button)
- Generate call script (with copy button)
- Export full report

### Analysis Page
- Info about analysis features
- How to interpret reports

### Settings Page
- API configuration info
- Application details

---

## 🔌 API Endpoints

```
GET  /                      - Health check
POST /leads/                - Create new lead
GET  /leads/                - Get all leads
GET  /leads/{lead_id}       - Get lead details
POST /analysis/{lead_id}    - Analyze lead (generates all reports)
POST /pitch/                - Generate sales pitch
POST /calls/script          - Generate call script
```

---

## ⚙️ Configuration

### Environment Variables

**.env.local (Frontend)**
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**.env (Backend)**
```
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=postgresql://user:password@localhost/dbname
ENVIRONMENT=development
```

---

## 🎯 Use Cases

1. **Sales Teams**: Analyze prospects before outreach
2. **Business Development**: Identify growth opportunities
3. **Marketing Teams**: Understand competitor positioning
4. **Agencies**: Generate client reports and strategies
5. **B2B Sales**: Personalized pitch generation for cold outreach

---

## 📈 Performance Features

- Real-time analysis streaming
- Caching of analysis results
- Responsive UI with loading states
- Copy-to-clipboard for easy sharing
- Export reports for presentations
- Professional formatting for readability

---

## 🔒 Security Considerations

- API key protection (use environment variables)
- Input validation on frontend and backend
- Secure database connections
- CORS configuration for frontend
- Rate limiting recommendations for production

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy to Vercel: vercel
```

### Backend (Railway/Render/AWS)
```bash
# Use production-grade ASGI server
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
```

---

## 📞 Support & Troubleshooting

### Common Issues

**Module not found errors**
- Ensure jsconfig.json is in frontend root with @/ path alias
- Run `npm install` to install all dependencies

**API connection errors**
- Verify backend is running on http://localhost:8000
- Check .env.local has correct API_URL
- Check CORS settings in FastAPI backend

**Gemini API errors**
- Verify GEMINI_API_KEY is set in backend .env
- Check API quota and billing status
- Ensure API is enabled in Google Cloud Console

---

## 📚 Documentation

- API Documentation: `/docs` (FastAPI Swagger)
- Frontend Components: See src/components/
- Services: See src/services/
- Backend Prompts: See backend/langgraph_agent/prompts.py

---

## 🎉 Project Complete

This professional AI Sales Agent is ready for:
✅ Real-world business use
✅ Team collaboration
✅ Client presentations
✅ Sales productivity tools
✅ Marketing research

**Version**: 1.0.0
**Last Updated**: May 2, 2026

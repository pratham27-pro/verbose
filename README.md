# Verbose

A real-time chat application inspired by Discord, built with Django Channels and modern web technologies. Create servers, manage channels, and chat in real-time with WebSocket communication.

## ✨ Features

- **Real-time Messaging**: Instant messaging using WebSockets and Django Channels
- **Server Management**: Create and join servers with invite links
- **Channel Organization**: Text channels within servers for organized conversations
- **Role-based Permissions**: Different user roles with specific permissions
- **User Authentication**: Secure signup/login system
- **Message History**: Browse previous messages with search functionality
- **Online Status**: See who's currently online
- **Modern UI**: Clean, responsive design with shadcn/ui components

## 🛠 Tech Stack

- **Backend**: Django, Django REST Framework, Django Channels
- **Database**: PostgreSQL
- **Message Broker**: Redis
- **Frontend**: Vite, TypeScript, React
- **Styling**: Tailwind CSS, shadcn/ui
- **Real-time**: WebSockets

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- PostgreSQL
- Redis

### Backend Setup

1. Clone the repository
```bash
git clone https://github.com/pratham27-pro/verbose.git
cd verbose
```

2. Create virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies
```bash
pip install -r requirements.txt
```

4. Setup environment variables
```bash
cp .env.sample .env
# Edit .env with your database and Redis configurations
```

5. Run migrations
```bash
python manage.py makemigrations account
python manage.py makemigrations server
python manage.py makemigrations webchat
python manage.py migrate
```

6. Create superuser (optional)
```bash
python manage.py createsuperuser
```

7. Start Redis server
```bash
redis-server
```

8. Run Django server
```bash
python manage.py runserver
```

### Frontend Setup

1. Navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`

## 📁 Project Structure

```
verbose/
│
├── frontend/                     # Vite + React (TypeScript) frontend
│   ├── public/                   # Static files (favicon, index.html)
│   ├── src/                      # Main frontend source code
│   │   ├── @types/               # Custom TypeScript type definitions
│   │   ├── assets/               # Static assets (images, SVGs)
│   │   ├── components/           # Reusable UI components
│   │   ├── context/              # React Context Providers (e.g. Auth)
│   │   ├── helpers/              # Utility functions
│   │   ├── hooks/                # Custom React hooks
│   │   ├── lib/                  # Third-party library wrappers
│   │   ├── pages/                # Page components with routing
│   │   ├── services/             # API integration & data fetching
│   │   ├── App.tsx               # Main App component
│   │   ├── main.tsx              # React entry point
│   │   └── config.ts             # Global configuration
│   ├── .env                      # Frontend environment variables
│   ├── vite.config.ts            # Vite configuration
│   └── tsconfig.*.json           # TypeScript configurations
│
├── verbose/                      # Django backend project root
│   ├── account/                  # Authentication app
│   │   ├── authenticate.py       # Login/register logic
│   │   ├── serializers.py        # DRF serializers for account data
│   │   ├── models.py             # Custom user models
│   │   ├── schemas.py            # Schema structure definitions
│   │   └── views.py              # Account API views
│   ├── server/                   # Core server management app
│   │   ├── models.py             # Server and channel models
│   │   ├── views.py              # Server API views
│   │   ├── schema.py             # DRF schema definitions
│   │   ├── serializer.py         # Data serializers
│   │   └── validator.py          # Input validators
│   ├── webchat/                  # Real-time chat app
│   │   ├── consumer.py           # Django Channels WebSocket consumers
│   │   ├── middleware.py         # Custom middleware
│   │   ├── models.py             # Chat message models
│   │   ├── schemas.py            # Chat schema definitions
│   │   └── views.py              # Chat API views
│   ├── settings.py               # Django settings
│   ├── urls.py                   # URL routing
│   ├── asgi.py                   # ASGI config for WebSockets
│   └── wsgi.py                   # WSGI config
│
├── manage.py                     # Django management CLI
├── requirements.txt              # Python dependencies
├── schema.yml                    # API schema definitions
└── .env / .env.sample            # Environment variables
```

## 🔧 Key Features Implementation

### Multi-App Django Architecture
- **Account App**: User authentication and profile management
- **Server App**: Server creation, channel management, and permissions
- **Webchat App**: Real-time messaging with WebSocket consumers

### WebSocket Communication
- Real-time messaging using Django Channels consumers
- Connection management for online/offline status
- Message broadcasting to channel subscribers

### Modern Frontend Architecture
- TypeScript for type safety and better development experience
- Organized folder structure with separate concerns
- Custom hooks for state management and API calls
- Context providers for global state (authentication, theme)

### API Design
- Django REST Framework for structured API endpoints
- Custom serializers and validators for data integrity
- Schema definitions for consistent API documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

## 📝 Environment Variables

Create a `.env` file in the project root:

```env
# Django Settings
DEBUG=True
SECRET_KEY=your-secret-key-here

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/verbose
# Or for SQLite: DATABASE_URL=sqlite:///db.sqlite3

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

Frontend `.env` in `frontend/` directory:
```env
VITE_API_BASE_URL=
VITE_WS_URL=
```

## 🐛 Known Issues

- File uploads not yet implemented
- Voice channels are planned for future releases
- Mobile responsiveness needs improvement

## 📚 Learning Outcomes

This project helped me learn:
- **Real-time Applications**: WebSocket implementation with Django Channels
- **Modern Frontend**: TypeScript, Vite, and React ecosystem
- **API Design**: RESTful APIs with Django REST Framework
- **Project Architecture**: Multi-app Django structure and separation of concerns
- **State Management**: React Context and custom hooks
- **Database Design**: Modeling relationships for chat applications
- **Authentication**: JWT-based authentication with Django

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Pratham Jain**
- GitHub: [@pratham27-pro](https://github.com/pratham27-pro)
- LinkedIn: [Pratham Jain](https://linkedin.com/in/pratham-jain-dev/)

## 🙏 Acknowledgments

- Inspired by Discord's UI/UX design
- Built as a learning project to understand real-time web applications
- Thanks to the Django and React communities for excellent documentation

---

⭐ If you found this project helpful, please give it a star!

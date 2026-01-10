# 🎨 Modern Portfolio & Admin Dashboard

A full-stack portfolio application with a powerful admin panel for managing projects and contact inquiries. Built with modern technologies and featuring a sleek, themeable UI with advanced state management and authentication.

---

## 🌟 Project Overview

This project is a comprehensive portfolio solution that combines a public-facing showcase with a robust admin dashboard. It features real-time content management, secure authentication, and a modern design system built entirely with CSS variables for seamless theming.

### Key Features

- **Dynamic Portfolio Website** - Showcase your work with an elegant, responsive design
- **Admin Dashboard** - Full CRUD operations for projects and contact management
- **Secure Authentication** - Cookie-based auth with localStorage persistence
- **Modern Theme System** - 60+ CSS variables for complete UI customization
- **Image Management** - Upload, preview, and delete project images
- **Contact Form** - Capture and manage visitor inquiries
- **Real-time Updates** - Optimistic updates with TanStack Query
- **Responsive Design** - Mobile-first approach with Tailwind CSS 4

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with latest features |
| **Vite** | Lightning-fast build tool and dev server |
| **TanStack Query v5** | Server state management & data fetching |
| **Zustand 5.x** | Client state management with persist middleware |
| **Axios** | HTTP client with interceptors |
| **Tailwind CSS 4** | Utility-first styling framework |
| **Framer Motion** | Smooth animations and transitions |
| **React Router v6** | Client-side routing with protected routes |
| **React Hot Toast** | Beautiful toast notifications |

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js & Express** | RESTful API server |
| **MongoDB** | NoSQL database for data persistence |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Token-based authentication |
| **Cookie-Parser** | Secure cookie management |
| **Multer** | File upload handling |
| **Bcrypt** | Password hashing |

---

## 📁 Project Architecture

```
Portfolio/
├── front/                          # React frontend application
│   ├── src/
│   │   ├── api/                    # API configuration & endpoints
│   │   │   ├── axios.js           # Axios instance with interceptors
│   │   │   └── endpoints/         # API endpoint definitions
│   │   │       ├── Contact.js
│   │   │       ├── Project.js
│   │   │       └── User.js
│   │   ├── assets/                 # Static assets (icons, images)
│   │   ├── components/             # Reusable components
│   │   │   ├── adminContact/      # Contact management
│   │   │   ├── adminProject/      # Project CRUD operations
│   │   │   ├── dashboard/         # Admin dashboard overview
│   │   │   ├── postProject/       # Create new projects
│   │   │   ├── sidebarWrapper/    # Admin navigation
│   │   │   └── loading/           # Loading states
│   │   ├── data/                   # Static data (Skills, Tech, Values)
│   │   ├── hooks/                  # Custom React hooks
│   │   │   └── UseCurrentUser.js  # Authentication hook
│   │   ├── layout/                 # Layout components
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── pages/                  # Route pages
│   │   │   ├── about/
│   │   │   ├── adminLogin/
│   │   │   ├── contact/
│   │   │   ├── home/
│   │   │   └── projects/
│   │   ├── store/                  # Zustand state stores
│   │   │   └── UserAuth.jsx       # Auth state with persistence
│   │   ├── App.jsx                 # Main app component
│   │   └── index.css               # Global styles & CSS variables
│   ├── package.json
│   └── vite.config.js
│
└── back/                           # Express backend API
    ├── controllers/                # Route controllers
    │   ├── ContactController.js
    │   ├── ProjectController.js
    │   └── userController.js
    ├── middleware/                 # Custom middleware
    │   └── adminMiddleware.js      # Auth protection
    ├── models/                     # Mongoose schemas
    │   ├── Contact.js
    │   ├── Projects.js
    │   └── User.js
    ├── routes/                     # API routes
    │   ├── ContactRoutes.js
    │   ├── LoginRoutes.js
    │   └── ProjectRoutes.js
    ├── scripts/                    # Utility scripts
    │   └── seed-users.js           # Database seeding
    ├── package.json
    └── server.js                   # Express server entry
```

---

## 🎨 Design System

### Theme Architecture

The entire UI is built on a comprehensive CSS variable system with **60+ custom properties** for complete theme control:

#### Color Variables
```css
--text-primary: #E3E3E3           /* Primary text */
--text-secondary: rgba(227,227,227,0.8)  /* Secondary text */
--text-muted: rgba(255,255,255,0.6)      /* Muted text */
--border-color: rgba(255,255,255,0.1)    /* Borders & dividers */
--glass-overlay: rgba(255,255,255,0.04)  /* Glass morphism effects */
--modal-overlay: rgba(0,0,0,0.7)         /* Modal backdrops */
--accent: [Gradient/Accent color]        /* Highlight color */
--bg-dark: [Background color]            /* Main background */
```

#### Benefits
- **Consistent Design** - Single source of truth for all colors
- **Easy Theming** - Change variables to switch entire color scheme
- **Maintainable** - No hardcoded colors throughout the codebase
- **Scalable** - Add new themes without touching components

---

## 🔐 Authentication System

### Implementation Details

**State Management**
- Zustand store with `persist` middleware
- Auto-saves to localStorage as `user-auth-storage`
- Survives page refreshes and browser restarts

**Flow**
1. User logs in via admin login page
2. Backend validates credentials & sets HTTP-only cookie
3. Frontend stores user data in Zustand + localStorage
4. `useCurrentUser` hook validates session on mount
5. Protected routes check auth state before rendering

**Security Features**
- HTTP-only cookies prevent XSS attacks
- JWT tokens with expiration
- Password hashing with bcrypt
- Admin middleware protects backend routes
- Automatic session validation

---

## 📊 State Management Strategy

### Global State (Zustand)
- **User Authentication** - With localStorage persistence
- **Theme Settings** - User preferences

### Server State (TanStack Query)
- **Projects** - CRUD operations with optimistic updates
- **Contacts** - Fetch and delete operations
- **Current User** - Session validation

### Benefits
- **Separation of Concerns** - Clear distinction between client and server state
- **Automatic Caching** - TanStack Query handles cache invalidation
- **Optimistic Updates** - Instant UI feedback before server response
- **Error Handling** - Centralized error management with toast notifications

---

## 🚀 Key Features Breakdown

### Public Portfolio
- **Home** - Hero section with introduction
- **About** - Skills, values, and background
- **Services** - Technology stack showcase
- **Projects** - Filterable project gallery
- **Contact** - Form submission with validation

### Admin Dashboard
- **Overview** - Stats cards showing total projects and contacts
- **Projects Management** - Create, read, update, delete projects with image handling
- **Contact Management** - View and delete contact inquiries
- **Image Upload** - Multiple file uploads with preview and delete
- **Protected Routes** - Authentication-gated admin section

---

## 🔧 Technical Highlights

### Frontend Optimizations
- **Code Splitting** - React Router lazy loading
- **Image Optimization** - Lazy loading with native attributes
- **Memoization** - Strategic use of React.memo and useMemo
- **CSS Variables** - Zero runtime CSS-in-JS overhead
- **Vite HMR** - Instant hot module replacement in development

### Backend Features
- **RESTful API** - Clean, predictable endpoints
- **Middleware Chain** - Authentication, error handling, CORS
- **File Upload** - Multer for multipart form data
- **Data Validation** - Mongoose schemas with validators
- **Error Handling** - Centralized error responses

### State Management
- **Zustand Persistence** - Automatic localStorage sync
- **TanStack Query v5** - Modern data fetching with React hooks
- **Query Invalidation** - Smart cache updates after mutations
- **Optimistic UI** - Instant feedback with rollback on error


---

## 📝 API Structure

### Endpoints Overview

**Authentication**
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Logout and clear session
- `GET /api/auth/user` - Get current authenticated user

**Projects**
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project (protected)
- `PUT /api/projects/:id` - Update project (protected)
- `DELETE /api/projects/:id` - Delete project (protected)
- `DELETE /api/projects/:id/image` - Delete project image (protected)

**Contacts**
- `GET /api/contacts` - Get all contacts (protected)
- `POST /api/contacts` - Submit contact form
- `DELETE /api/contacts/:id` - Delete contact (protected)


---

## 📄 License

This project is created for portfolio purposes.

---

## 👨‍💻 Developer

Built with ❤️ using modern web technologies

**Project Status**: ✅ Active Development

# Portfolio & Admin Dashboard

A full-stack portfolio with an admin panel for managing projects and contact inquiries.

---

## Tech Stack

**Frontend** — React 19, Vite, TanStack Query, Zustand, Axios, Tailwind CSS 4, Framer Motion, React Router v6

**Backend** — Node.js, Express, MongoDB, Mongoose, JWT, Multer, Bcrypt

---

## Features

**Portfolio** — Hero, About, Projects gallery, Contact form

**Admin** — CRUD for projects with image uploads, contact inbox, protected routes

---

## Auth

Cookie-based with JWT. Zustand persists session to localStorage. HTTP-only cookies + bcrypt for security.

---

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/projects` | Get projects |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
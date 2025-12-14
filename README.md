# URL Shortener

Full-stack URL shortener with user auth, expiration, and history UI. Backend: Express + MongoDB + JWT. Frontend: React (Vite) + Tailwind.

## Project Structure
- backend/ — Express API, MongoDB models, JWT auth
- frontend/ — React UI (Vite), Tailwind styling

## Prerequisites
- Node.js 18+
- MongoDB running locally or remote URI

## Environment Variables
Create `backend/.env` (see `backend/.env.example`):
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/url-shortener
JWT_SECRET=your-super-secret-key
```

## Setup & Run
### Backend
```bash
cd backend
npm install
npm start    # starts Express on PORT
```

### Frontend
```bash
cd frontend
npm install
npm run dev  # Vite dev server
```

## API Endpoints
- `POST /auth/signup` — body `{ name, email, password }` → creates user, returns JWT
- `POST /auth/login` — body `{ email, password }` → returns JWT
- `POST /generate` — body `{ originalUrl, expireAt? }` → returns `{ shortUrl, originalUrl }`
- `GET /:id` — redirects to original URL (enforces expiry/status)

JWT auth: send `Authorization: Bearer <token>` for protected routes (future use).

## Frontend Notes
- Vite proxy forwards `/auth`, `/generate`, and short IDs to `http://localhost:3000`.
- Auth tokens are stored in `localStorage`; navbar updates after login/signup.
- History sidebar shows links you create in the current session.

## Folder Highlights
- Backend: `controllers/handleSignup.js`, `controllers/handleLogin.js`, `controllers/handleGenerateUrl.js`, `routes/auth.router.js`, `routes/url.router.js`
- Frontend: `src/components` (Navbar, MainCompo, Login, Signup, HistorySidebar), `src/pages/HomePage.jsx`, `vite.config.js`

## Testing
- Create an account via the Signup page or `POST /auth/signup`.
- Shorten a URL on the home page; click the short link to verify redirect.

## Deployment Tips
- Use a strong `JWT_SECRET` and distinct MongoDB URI per environment.
- Serve the built frontend (`npm run build` in frontend) behind the same domain as the API or adjust CORS/proxy accordingly.
- Behind HTTPS, ensure `http://` short links are upgraded or keep scheme-agnostic based on your hosting.

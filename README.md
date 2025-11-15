
# StoryBit Streaming Dashboard Clone

This is a simplified streaming service dashboard built using Next.js 14 (App Router), TypeScript, and Tailwind CSS.  
Movie data is fetched from the TMDB public API.  
This project is developed as part of the StoryBit Frontend Developer Assignment.

---

## Live Demo

Vercel URL: 
---

## Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- TMDB API
- Vercel Deployment

---

## Features

### Homepage
- Server-side data fetching using fetch() inside a Server Component  
- Hero banner showing the top movie  
- Horizontal scrolling movie rows  
- Categories: Trending Now, Popular, New Releases  

### Movie Detail Page
- Dynamic routing using `app/movie/[id]`  
- Fetches movie details by ID from TMDB  
- Displays poster, title, overview, and release date  

### API Integration
Environment variables are used to store the TMDB API key securely in `.env.local`.

---

## Folder Structure

```

storybit-dashboard/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ movie/[id]/page.tsx
│  └─ components/
│     ├─ Header.tsx
│     ├─ HeroBanner.tsx
│     ├─ MovieRow.tsx
│     ├─ MovieCard.tsx
├─ lib/
│  └─ tmdb.ts
├─ types/
│  └─ movie.ts
├─ public/
├─ .env.local
├─ next.config.ts
├─ tailwind.config.js
├─ postcss.config.js
└─ AI_Report.md

````

---

## Setup and Installation

### 1. Clone the Repository
```sh
git clone https://github.com/aliabrar21/StoryBit-Frontend-developer-Assignment-
cd storybit-dashboard
````

### 2. Install Dependencies

```sh
npm install
```

### 3. Create `.env.local` and add your TMDB API key

```
TMDB_API_KEY=YOUR_API_KEY
```

### 4. Run the Project Locally

```sh
npm run dev
```

The app will run at: [http://localhost:3000](http://localhost:3000)

---

## Production Build

```sh
npm run build
npm start
```

---

## Deployment Steps

1. Push the project to GitHub
2. Import the repository into Vercel
3. Add environment variable in Vercel:

   * Name: TMDB_API_KEY
   * Value: your TMDB API key
4. Deploy the application

---

## Developer

Abrar Ali
Frontend Developer Assignment – StoryBit

```

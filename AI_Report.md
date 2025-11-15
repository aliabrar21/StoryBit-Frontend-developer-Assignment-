# **AI_Report.md**

## **AI Usage Report – StoryBit Frontend Developer Assignment**

**Project:** Streaming Dashboard Clone
**Developer:** Sri Vaishnavi Nunna
**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, TMDB API, Vercel

---

## **1. AI Tools Used**

During development, the following AI tools were used to accelerate implementation:

### **1. ChatGPT**

* Used for generating component boilerplate (MovieRow, HeroBanner, MovieCard, dynamic route).
* Helped troubleshoot Tailwind layout issues (hero spacing, overflow behavior).
* Assisted in writing TypeScript interfaces for TMDB API.
* Provided optimized fetch patterns for Server Components.
* Suggested the folder structure and best practices for Next.js App Router.
* Helped create README.md and this AI_Report.md.

### **2. GitHub Copilot (VS Code)**

* Used for quick autocompletion inside components.
* Helped generate small code snippets like `map()` loops, prop typings, and Tailwind class suggestions.
* Provided inline suggestions for React component structure.

---

## **2. Tasks Heavily Supported by AI**

Below are the parts of the project where AI assistance played a significant role:

### **A. Tailwind Styling**

* Hero banner layout
* Removing unwanted spacing
* Horizontal scroll behavior in MovieRow
* Responsive design classes
* Header positioning (fixed top, z-index, padding)

### **B. API Integration & Fetch Helpers**

* `lib/tmdb.ts` file
* Fetching movie lists using environment variables
* Handling server-only fetch logic inside App Router

### **C. Component Architecture**

AI helped design/review:

* **HeroBanner.tsx**
* **MovieRow.tsx**
* **MovieCard.tsx**
* **Header.tsx**
* **Dynamic route setup:** `app/movie/[id]/page.tsx`

### **D. Project Structure Recommendations**

* Placement of components in `app/components/`
* Using `types/movie.ts` for type safety
* Ensuring `.env.local` only loads server-side

### **E. Documentation**

* Full README.md
* AI_Report.md (this file)
* Deployment instructions for Vercel

---

## **3. Manual Work Done Without AI**

These sections were implemented manually to ensure understanding of the framework:

* Running build/debug locally
* Configuring `.env.local`
* Creating Vercel project and environment variables
* Testing TMDB API using curl/Postman
* Checking dynamic routing manually
* Manual UI adjustments in the layout and main page

---

## **4. Project URLs**

* **Live Deployment:** [https://storybit-dashboard.vercel.app/]
* **GitHub Repository:** [https://github.com/SriBoo/storybit-dashboard.git]

---

## **5. Summary**

AI tools significantly improved development speed by assisting with:

* Code scaffolding
* Tailwind styling
* TypeScript typing
* Next.js App Router setup
* API integration
* Documentation

However, all implementation decisions, debugging, final code structure, and deployment were handled manually by the developer.

This project demonstrates the ability to:

* Use AI effectively
* Integrate external APIs
* Build with Next.js 14 App Router
* Follow modern frontend best practices
* Deploy production-ready apps

---


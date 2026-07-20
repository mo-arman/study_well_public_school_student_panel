import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT for GitHub Pages: replace "study-well-portal" below with your
// actual GitHub repository name (the part after github.com/username/).
// Example: if your repo URL is github.com/yourname/school-site,
// then base should be "/school-site/".
// If you're deploying to a custom domain instead of github.io, set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/study-well-portal/",
});

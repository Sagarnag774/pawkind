
const supabaseUrl = "https://qiphxxfjnnhmmxbqhvlr.supabase.co";   // <-- REPLACE THIS
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpcGh4eGZqbm5obW14YnFodmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNzg4MzEsImV4cCI6MjA3OTY1NDgzMX0.sx-ghcN9isrnrFIYMKW0m0yorhwj6wroG4KzPDAa990";

if (!supabaseUrl || supabaseUrl.includes("YOUR-PROJECT")) {
  console.warn("supabaseClient.js: You must set supabaseUrl to your project's URL (see Supabase → Settings → API).");
}

export const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

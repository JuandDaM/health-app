import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xrdikbbziyuexlslcznc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyZGlrYmJ6aXl1ZXhsc2xjem5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MzExNzMsImV4cCI6MjA1OTMwNzE3M30.cT7KsppUvJIMJUT73X4m6CzJ1YXgl0p8BGkjHWgMNlE"

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
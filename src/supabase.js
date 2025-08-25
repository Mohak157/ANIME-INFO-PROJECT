// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://woqbmzajwovptjryihkq.supabase.co";        // from Supabase project
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcWJtemFqd292cHRqcnlpaGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMjA5NTEsImV4cCI6MjA3MTY5Njk1MX0.wiDfe_W_H7rsJaEgPBNjRLhmDfLJBDX_FLHIyW32DJY";      // from Supabase project

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

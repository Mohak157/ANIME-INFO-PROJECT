// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = ;        // from Supabase project
const SUPABASE_ANON_KEY = ;      // from Supabase project

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  schema: 'public', // important to match your table's schema
});

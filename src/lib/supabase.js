import { createClient  } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const supabase = (supabaseUrl && supabasePublishableKey)
  ? createClient(supabaseUrl, supabasePublishableKey)
  : null;

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn("Supabase env vars missing. Data services will not initialize.");
}

export { supabase };

// TypeScript types for Supabase profiles table
export type Profile = {
  id: string;
  username: string;
  avatar_url?: string;
  bio?: string;
  created_at: string; // ISO date string
};

-- Create contacts table for the contact form
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Disable RLS for now (enable later with proper policies)
ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;
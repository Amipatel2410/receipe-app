

\c receipe-app-development;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);

ALTER TABLE receipe
ADD COLUMN user_id INTEGER REFERENCES users(id);

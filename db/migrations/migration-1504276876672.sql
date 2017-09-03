\c receipe-app-development;


CREATE TABLE IF NOT EXISTS users_receipe (
  user_id INTEGER REFERENCES users(id),
  receipe_id INTEGER REFERENCES receipe(id)
);

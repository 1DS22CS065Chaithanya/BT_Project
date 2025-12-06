

-- CREATE TABLE users (
--     id TEXT PRIMARY KEY,
--     username TEXT UNIQUE NOT NULL,
--     email TEXT UNIQUE NOT NULL,
--     password_hash TEXT NOT NULL
-- );

-- CREATE TABLE products (
--   id TEXT PRIMARY KEY,
--   name TEXT NOT NULL,
--   price REAL NOT NULL,
--   description TEXT,
--   image TEXT,
--   in_stock INTEGER NOT NULL DEFAULT 1,
--   discount INTEGER DEFAULT 0
-- );

-- INSERT INTO products (id, name, price, description, image, in_stock, discount) VALUES
-- ('1', 'Wireless Headphones', 120.00, 'High quality sound with noise cancellation.', 'http://localhost:3001/images/Headphones.jpg', 1, 0),
-- ('2', 'Smartphone X', 899.00, 'Latest model with amazing features.', 'http://localhost:3001/images/Mobile.webp', 1, 10),
-- ('3', 'Gaming Laptop', 1500.00, 'High performance gaming laptop.', 'http://localhost:3001/images/Laptop.jpg', 0, 0);
-- USERS TABLE
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

-- PRODUCTS TABLE WITH CATEGORY
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price REAL NOT NULL,
  description TEXT,
  image TEXT,
  in_stock INTEGER NOT NULL DEFAULT 1,
  discount INTEGER DEFAULT 0
);

-- SAMPLE DATA
INSERT INTO products (id, name, category, price, description, image, in_stock, discount) VALUES
('1', 'Wireless Headphones', 'electronics', 120.00, 'High quality sound with noise cancellation.', 'http://localhost:3001/images/Headphones.jpg', 1, 0),
('2', 'Smartphone X', 'electronics', 899.00, 'Latest model with amazing features.', 'http://localhost:3001/images/Mobile.webp', 1, 10),
('3', 'Gaming Laptop', 'computers', 1500.00, 'High performance gaming laptop.', 'http://localhost:3001/images/Laptop.jpg', 0, 0),

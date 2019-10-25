
CREATE TABLE house (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO house
(name, address, city, state, zip, img, mortgage, rent)
VALUES
('Mansion', '1234 State Street', 'Newport','AZ', 86259, 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkeithflamer%2Ffiles%2F2018%2F10%2FScreen-Shot-2018-11-01-at-4.35.01-PM-1200x674.jpg', 2500, 5000);
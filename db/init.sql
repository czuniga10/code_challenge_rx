--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    users;

--Creates new instances of tables

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone TEXT, 
    email TEXT
 );

--Inserts test data into tables

INSERT INTO users ( first_name, last_name, phone, email )
VALUES
    ('Chad', 'Zuniga', '7856437859', 'czuniga@thumbtack.com'),
    ('Test', 'Test', '(555) 555-5555', 'test@thumbtack.com')
;
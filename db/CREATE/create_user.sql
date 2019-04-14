INSERT INTO users(first_name, last_name, phone, email)
VALUES ($1, $2, $3)
returning *
;
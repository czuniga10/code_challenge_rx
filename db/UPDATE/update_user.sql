UPDATE users
SET
    first_name = $2,
    last_name = $3,
    phone = $4,
    email = $5
WHERE
    id = $1

returning *
;
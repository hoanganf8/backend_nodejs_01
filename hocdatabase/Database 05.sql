use f8_backend_k1;

CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY,
    name varchar(50),
    email varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    CONSTRAINT users_email_unique UNIQUE(email)
);

use f8_backend_k1;
DESCRIBE users;

use f8_backend_k1;
INSERT INTO users(id, name, email, password) VALUES(1, 'Hoàng An', 'an@gmail.com', '123456');
-- use f8_backend_k1;
-- ALTER TABLE users DROP INDEX users_email_id_unique;

-- use f8_backend_k1;
-- ALTER TABLE users ADD CONSTRAINT users_email_id_unique UNIQUE(email, id)

-- use f8_backend_k1;
-- SELECT * FROM users;

-- use f8_backend_k1;
-- DROP TABLE users;

-- use f8_backend_k1;
-- ALTER TABLE users DROP PRIMARY KEY;

use f8_backend_k1;
ALTER TABLE users ADD PRIMARY KEY(id); 
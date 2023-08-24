use f8_backend_k1;

CREATE TABLE posts(
    id INT PRIMARY KEY,
    title varchar(255) NOT NULL,
    content text NOT NULL,
    user_id int,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY (user_id) REFERENCES users(id)
)

use f8_backend_k1;
DESCRIBE posts;
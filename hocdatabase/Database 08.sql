use f8_backend_k1;

CREATE INDEX products_status_index ON products(status);

use f8_backend_k1;
DESCRIBE products;

use f8_backend_k1;
ALTER TABLE products DROP INDEX products_status_index;
CREATE TABLE sample (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

SELECT * FROM sample;

CREATE TABLE customers (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customers_email_unique UNIQUE (email),
    CONSTRAINT customers_phone_unique UNIQUE (phone)
) ENGINE = InnoDB;

SELECT * FROM customers;

SELECT * FROM customers WHERE name = "Natasha Romanoff";

CREATE TABLE products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

INSERT INTO
    products (
        id,
        name,
        price,
        stock,
        category
    )
VALUES (
        "P-0001",
        "A",
        "1000",
        "100",
        "C1"
    ),
    (
        "P-0002",
        "B",
        "2000",
        "200",
        "C1"
    ),
    (
        "P-0003",
        "C",
        "3000",
        "300",
        "C1"
    ),
    (
        "P-0004",
        "D",
        "4000",
        "400",
        "C2"
    ),
    (
        "P-0005",
        "E",
        "5000",
        "500",
        "C2"
    )

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE wallet (
    id VARCHAR(100) NOT NULL,
    balance INT NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) ENGINE = InnoDB;

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE = InnoDB;

INSERT INTO
    comments (
        customer_id,
        title,
        description
    )
VALUES (
        "1",
        "Comment 1",
        "Description for comment 1"
    ),
    (
        "1",
        "Comment 2",
        "Description for comment 2"
    ),
    (
        "8",
        "Comment 1",
        "Description for comment 1"
    ),
    (
        "8",
        "Comment 2",
        "Description for comment 2"
    )

CREATE TABLE likes (
    customer_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (customer_id, product_id),
    CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
) ENGINE = InnoDB;

CREATE TABLE _loves (
    A VARCHAR(100) NOT NULL,
    B VARCHAR(100) NOT NULL,
    PRIMARY KEY (A, B),
    CONSTRAINT loves_customer_id_fk FOREIGN KEY (A) REFERENCES customers (id),
    CONSTRAINT loves_product_id_fk FOREIGN KEY (B) REFERENCES products (id)
) ENGINE = InnoDB;
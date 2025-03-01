CREATE DATABASE IF NOT EXISTS propositions_db;
USE propositions_db;

CREATE TABLE IF NOT EXISTS propositions (
                                            id INT AUTO_INCREMENT PRIMARY KEY,
                                            theme VARCHAR(50) NOT NULL,
    text TEXT NOT NULL,
    date_soumission TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

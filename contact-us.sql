CREATE TABLE CONTACT
(
Contact_Id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
firstname VARCHAR(15) NOT NULL,
lastname VARCHAR(15) NOT NULL,
email_id INT NOT NULL,
p_comment VARCHAR(30) NOT NULL
);
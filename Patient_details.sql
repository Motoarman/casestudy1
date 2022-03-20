CREATE TABLE Patient_details(
Id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
First_name VARCHAR(20),
Last_name VARCHAR(20),
Phone_no VARCHAR(15),
Email_id VARCHAR(30),
Age INT,
Gender VARCHAR(10),
Medical_complaint VARCHAR(70),
Selected_date DATE,
Selected_slot TIMESTAMP,
Visiting_status VARCHAR(15)
);
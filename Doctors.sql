CREATE TABLE Doctors(
Id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
First_name VARCHAR(20),
Last_name VARCHAR(20),
Phone_no VARCHAR(15),
Email_id VARCHAR(30),
Specialization_id INT NOT NULL REFERENCES Doctor_specialization(Id)	
);
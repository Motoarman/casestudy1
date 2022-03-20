CREATE TABLE Appointment_status(
Id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
Status VARCHAR(15),
Created_date DATE,
Created_by VARCHAR(10),
Updated_date DATE,
Updated_by VARCHAR(10)
);
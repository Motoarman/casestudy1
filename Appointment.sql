CREATE TABLE Appointment(
Id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
Doctor_id INT NOT NULL REFERENCES Doctors(Id),
Patient_id INT NOT NULL REFERENCES Patient_details(Id),

);
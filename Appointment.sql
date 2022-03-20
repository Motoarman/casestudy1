CREATE TABLE Appointment(
Id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
Doctor_id INT NOT NULL REFERENCES Doctors(Id),
Patient_id INT NOT NULL REFERENCES Patient_details(Id),
Appointment_status_id INT NOT NULL REFERENCES Appointment_status(Id),
Starttime DATE,
Endtime DATE,
Comment_by_patient VARCHAR(2000),
Comment_by_doctos VARCHAR(2000),
Created_date DATE,
Created_by VARCHAR(10),
Updated_date DATE,
Updated_By VARCHAR(10)
);
CREATE TABLE Doctor_availability(
Id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
Doctor_id INT NOT NULL REFERENCES Doctors(Id),
Day_in_week VARCHAR(15),
Starting_time TIMESTAMP,
Ending_time TIMESTAMP,
Open_for_day VARCHAR(5),
Minute_per_patient INT,
Created_date DATE,
Created_by VARCHAR(10),
Updated_date DATE,
Updated_by VARCHAR(10)
);
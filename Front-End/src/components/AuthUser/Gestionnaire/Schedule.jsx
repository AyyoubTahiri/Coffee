import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from "@mui/material";

const Schedule = () => {
  const [schedule, setSchedule] = useState([
    { name: "John", monday: "Active", tuesday: "Inactive", wednesday: "Active", thursday: "Active", friday: "Active", saturday: "Inactive", sunday: "Inactive" },
    { name: "Jane", monday: "Inactive", tuesday: "Active", wednesday: "Inactive", thursday: "Active", friday: "Active", saturday: "Inactive", sunday: "Inactive" },
  ]);

  const [activeDays, setActiveDays] = useState([
    { name: "John", days: ["2/4/2024"] },
    { name: "Jane", days: ["2/4/2024"] },
  ]);

  const toggleStatus = (name, day) => {
    const updatedSchedule = schedule.map((emp) => {
      if (emp.name === name) {
        return {
          ...emp,
          [day]: emp[day] === "Active" ? "Inactive" : "Active",
        };
      }
      return emp;
    });
    setSchedule(updatedSchedule);
  };

  const filterEmployees = (e) => {
    const selectedDay = new Date(e.target.value).getDay();
    const filteredEmployees = activeDays.filter((emp) => emp.days.includes(selectedDay));
    setActiveDays(filteredEmployees);
  };

  return (
    <>
      <Box
        bgcolor="#f0f0f0"
        p={2}
      >
        <Typography variant="h5">Schedule</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#795548', color: 'white' }}>
                <TableCell>Name</TableCell>
                <TableCell>Monday</TableCell>
                <TableCell>Tuesday</TableCell>
                <TableCell>Wednesday</TableCell>
                <TableCell>Thursday</TableCell>
                <TableCell>Friday</TableCell>
                <TableCell>Saturday</TableCell>
                <TableCell>Sunday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((emp) => (
                <TableRow key={emp.name}>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => toggleStatus(emp.name, "monday")}
                      style={{
                        backgroundColor: emp.monday === "Active" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {emp.monday}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => toggleStatus(emp.name, "tuesday")}
                      style={{
                        backgroundColor: emp.tuesday === "Active" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {emp.tuesday}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => toggleStatus(emp.name, "wednesday")}
                      style={{
                        backgroundColor: emp.wednesday === "Active" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {emp.wednesday}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => toggleStatus(emp.name, "thursday")}
                      style={{
                        backgroundColor: emp.thursday === "Active" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {emp.thursday}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => toggleStatus(emp.name, "friday")}
                      style={{
                        backgroundColor: emp.friday === "Active" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {emp.friday}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => toggleStatus(emp.name, "saturday")}
                      style={{
                        backgroundColor: emp.saturday === "Active" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {emp.saturday}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => toggleStatus(emp.name, "sunday")}
                      style={{
                        backgroundColor: emp.sunday === "Active" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {emp.sunday}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <Typography variant="h5">Employees Action This Year</Typography>
          <input type="date" onChange={filterEmployees} />
        </Box>

        <TableContainer component={Paper} style={{ marginTop: 20 }}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#795548', color: 'white' }}>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activeDays.map((emp) => (
                <TableRow key={emp.name}>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.days.join(", ")}</TableCell>
                  <TableCell>{emp.days.length > 0 ? "Active" : "Inactive"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Schedule;

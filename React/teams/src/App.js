import React from "react";
import Header from './components/Header'
// import Contents from "./components/Content"
import Footer from './components/Footer'
import Employee from "./components/Employee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupedTeamMember from "./components/GroupedTeamMember";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";


function App() {

  const [selectedTeam, setSelectedTeam] = React.useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = React.useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  React.useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  React.useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  function handleSelectedTeam(event) {
    setSelectedTeam(event.target.value);
  }

  function handleCardClick(event) {
    // console.log(event)
    const transformedEmployee = employees.map((employee) => {
      return (employee.id === parseInt(event.currentTarget.id)) ? (
        employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee
    })
    setEmployees(transformedEmployee);
  }
  return (

    <Router>
      <Nav/>
      <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
      <Routes>
        <Route path="/" element={<Employee selectedTeam={selectedTeam} employees={employees} handleSelectedTeam={handleSelectedTeam} handleCardClick={handleCardClick} />}></Route>
        <Route path="/GroupedTeamMember" element={<GroupedTeamMember selectedTeam={selectedTeam} employees={employees} setSelectedTeam={setSelectedTeam}/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

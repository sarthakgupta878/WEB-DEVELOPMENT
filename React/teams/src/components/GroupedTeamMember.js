import React from 'react'

const GroupedTeamMember = ({selectedTeam,employees,setSelectedTeam}) => {
    
    const [groupedEmployee, setGroupedEmployee] = React.useState(groupTeamMember())

    function groupTeamMember(){
        var teams =[]

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        var teamA = {team:'TeamA',members:teamAMembers,collapsed: selectedTeam ==='TeamA' ? false:true  }
        teams.push(teamA)

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB = {team:'TeamB',members:teamBMembers,collapsed: selectedTeam ==='TeamB' ? false:true  }
        teams.push(teamB)

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        var teamC = {team:'TeamC',members:teamCMembers,collapsed: selectedTeam ==='TeamC' ? false:true  }
        teams.push(teamC)

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        var teamD = {team:'TeamD',members:teamDMembers,collapsed: selectedTeam ==='TeamD' ? false:true  }
        teams.push(teamD)
        // console.log(teams)
        return teams
    }
 function handleTeamClick(event){
    var transformedGroupedEmployee = groupedEmployee.map((group) => group.team === event.currentTarget.id ? {...group , collapsed : !group.collapsed}:group )
    setGroupedEmployee(transformedGroupedEmployee)
    setSelectedTeam(event.currentTarget.id)
    
 }
 
  return (
    <div className='container'>
        {
            groupedEmployee.map((item)=>{
                return (
                    <div key={item.team} id={item.team} className='card mt-2'  style={{ cursor: "pointer" }} onClick={handleTeamClick} >
                        <h4  className='card-header text-secondaru bg-white' >
                            Team Name:{item.team}
                        </h4>
                        <div id={"collapse_" + item.team} className={item.collapsed === true ? 'collapse':''}>
                            <hr />
                            {
                                item.members.map(member=>{
                                    return (
                                        <div key={member.id} className='mt-2'>
                                            <h5 className='card-title mt-2'>
                                                <span className='text-dark'>Full Name: {member.fullName}</span>
                                            </h5>
                                            <h6 className='card-text'>Designation: {member.designation}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default GroupedTeamMember    
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Employee from './Employee'
import '../css/OurTeam.css'
import LoadingScreen from './LoadingScreen'

const OurTeam = props => {
    const [teamList, setTeamList] = useState()

    useEffect(() => {
        if (!teamList) {
            fetch(`/employees/getEmployeesList`)
                .then(response => response.json())
                .then(data => {
                    setTeamList(data.EmployeesList)
                })
        }
    }, [teamList, setTeamList])

    return (
        <div className="ourteam-wrapper">
            <Helmet>
                <title>Our Team - Usada Constructions🥕</title>
                <meta property="og:title" content={"Our Team - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Our Team - Usada Constructions🥕"} />
            </Helmet>
            <div className="ourteam-header">
                <div className="ot-title">OUR TEAM</div>
            </div>

            <div className="ourteam-body">
                {teamList ?
                    teamList.map(employee => <Employee data={JSON.stringify(employee)} />)
                    :
                    <LoadingScreen />
                }
            </div>
        </div>
    )
}

export default OurTeam
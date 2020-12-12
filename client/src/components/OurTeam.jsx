import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import Employee from './Employee'
import '../css/OurTeam.css'
import LoadingScreen from './LoadingScreen'
import { getBackground, ourTeamHeader } from '../helpers/images'

const OurTeam = props => {
    const [t, i18n] = useTranslation(["header", "commons"])
    const currentLanguage = i18n.language
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
                <title>{t("OUR TEAM")} - {t("Usada Constructions")}🥕</title>
                <meta property="og:title" content={"Our Team - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Our Team - Usada Constructions🥕"} />
            </Helmet>
            <div className="ourteam-header" style={getBackground(ourTeamHeader)}>
                <div className="ot-title">{t("OUR TEAM")}</div>
            </div>

            <div className="ourteam-body">
                {teamList ?
                    teamList[currentLanguage].map(employee => <Employee data={JSON.stringify(employee)} />)
                    :
                    <LoadingScreen />
                }
            </div>
        </div>
    )
}

export default OurTeam
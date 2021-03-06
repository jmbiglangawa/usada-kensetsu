import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import ProjectCell from './ProjectCell'
import LoadingScreen from './LoadingScreen'
import '../css/Projects.css'

const Projects = () => {
    const [t] = useTranslation(["header", "commons"])
    const [projectsList, setProjectsList] = useState()

    useEffect(() => {
        if (!projectsList) {
            fetch(`${process.env.REACT_APP_API_URL}projects/getProjectsList`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        if (data.ProjectsList.length > 0) {
                            setProjectsList(data.ProjectsList.map((data, index) => <ProjectCell data={JSON.stringify(data)} key={index} />))
                        } else {
                            setProjectsList(<div>{t("No projects at the moment")}</div>)
                        }
                    }
                })
        }
    }, [projectsList, setProjectsList])

    return (
        <div className="projects-wrapper">
            <Helmet>
                <title>{t("PROJECTS")} - {t("Usada Constructions")}🥕</title>
                <meta property="og:title" content={"Projects - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Projects - Usada Constructions🥕"} />
            </Helmet>
            <div className="projects-header">
                <div className="ph-title">{t("PROJECTS")}</div>
            </div>

            {projectsList ?
                (
                    <div className="projects-grid">
                        {projectsList}
                    </div>
                )
                :
                <LoadingScreen />
            }
        </div>
    )
}

export default Projects
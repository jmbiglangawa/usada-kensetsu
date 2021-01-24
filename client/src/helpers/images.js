const API_URL = "https://i.imgur.com/"
const SVG_URL = process.env.REACT_APP_API_URL + "images/"

module.exports = {
    backTemplateSVG: SVG_URL + "back-template.svg",
    carrotBG: SVG_URL + "carrot-bg.svg",
    ellipsisBG: SVG_URL + "ellipsis-bg.svg",
    frontTemplateSVG: SVG_URL + "front-template.svg",
    rabbitBG: SVG_URL + "rabbit-bg.svg",
    rabbitIcon: SVG_URL + "rabbit-icon.svg",
    servicesHeader: SVG_URL + "services-header.svg",
    bunnyIcon: SVG_URL + "bunny-icon.svg",
    carrot: SVG_URL + "carrot.svg",
    large: SVG_URL + "large.svg",
    rabbitShape: SVG_URL + "rabbit-shape.svg",
    small: SVG_URL + "small.svg",
    
    creditsHeader: API_URL + "gUJ7l1a.png",
    headerLogo: API_URL + "O7Yhzrz.png",
    minecraftDiaBoots: API_URL + "VI4nT6l.png",
    minecraftDiaPickaxe: API_URL + "hk4jmO2.png",
    minecraftIronIngot: API_URL + "awjT547.png",
    minecraftWither: API_URL + "exEsYzT.png",
    meta: API_URL + "sQg8JNS.png",
    ourTeamHeader: API_URL + "f3hj55W.png",
    pekodamCover: API_URL + "SJ4vRjm.png",
    projectsHeader: API_URL + "Pgwsvll.png",
    usada3D: API_URL + "EINaSuR.png",
    usadaCredits: API_URL + "ED9Vx5O.jpg",
    usadaFrontPage: API_URL + "DftUDLI.png",
    usadaFront: API_URL + "Tq8HhzH.png",
    usadaPrivacyPolicy: API_URL + "1467fsj.png",

    getBackground: (image) => ({backgroundImage: `url(${image})`})
}
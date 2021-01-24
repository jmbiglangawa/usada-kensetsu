const API_URL = "https://i.imgur.com/"

module.exports = {
    backTemplatePNG: API_URL + "back-template.png?alt=media&token=a46310b3-39c4-409e-ad1d-3fe21dbdc345",
    backTemplateSVG: API_URL + "back-template.svg?alt=media&token=071f6131-7807-4ca7-b580-ce9f3d35e425",
    carrotBG: API_URL + "carrot-bg.svg?alt=media&token=66ef40f6-43d6-4801-9d8e-d44cf23bbaf9",
    creditsHeader: API_URL + "gUJ7l1a.png",
    ellipsisBG: API_URL + "ellipsis-bg.svg?alt=media&token=e6a8f90b-74f6-4bad-85ca-68c2d1de9ab6",
    frontTemplatePNG: API_URL + "front-template.png?alt=media&token=8329bf63-5420-4a91-8c45-9970b309786e",
    frontTemplateSVG: API_URL + "front-template.svg?alt=media&token=f965e029-b2e8-486c-96ed-3e859f3589c1",
    headerLogo: API_URL + "O7Yhzrz.png",
    minecraftDiaBoots: API_URL + "VI4nT6l.png",
    minecraftDiaPickaxe: API_URL + "hk4jmO2.png",
    minecraftIronIngot: API_URL + "awjT547.png",
    minecraftWither: API_URL + "exEsYzT.png",
    meta: API_URL + "sQg8JNS.png",
    ourTeamHeader: API_URL + "f3hj55W.png",
    pekodamCover: API_URL + "SJ4vRjm.png",
    projectsHeader: API_URL + "Pgwsvll.png",
    rabbitBG: API_URL + "rabbit-bg.svg?alt=media&token=85353006-747c-4017-b66d-315176cf91c2",
    rabbitIcon: API_URL + "rabbit-icon.svg?alt=media&token=c77eb3da-bf03-48ff-9cc8-b4789770a6ec",
    servicesHeader: API_URL + "services-header.svg?alt=media&token=cbfb7e05-17e6-436e-840a-5d4eef5cad28",
    usada3D: API_URL + "EINaSuR.png",
    usadaCredits: API_URL + "ED9Vx5O.jpg",
    usadaFrontPage: API_URL + "DftUDLI.png",
    usadaFront: API_URL + "Tq8HhzH.png",
    usadaPrivacyPolicy: API_URL + "1467fsj.png",
    getBackground: (image) => ({backgroundImage: `url(${image})`})
}
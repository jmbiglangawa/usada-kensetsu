export const getSubscribersCount = async() => {
    const response = await fetch('youtube/current-subscribers-count');
    return response.json();
}

export const getPekoraMinecraftVideoList = async() => {
    const response = await fetch('youtube/pekora-minecraft-video');
    return response.json();
}

export const getPekoraAllVideoList = async() => {
    const response = await fetch('youtube/pekora-all-video');
    return response.json();
}
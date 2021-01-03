const fetch = require('node-fetch');
let io;
let currentCount = 0;
let pekoraMinecraftVideoList;
let pekoraAllVideoList;

const fetchPekoraMinecraftVideoList = async() => {
    console.log("Refreshing Pekora's Minecraft Video List...")
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1DCedRgGHBdm81E1llLhOQ&maxResults=10&q=Minecraft&type=video&key=${process.env.YOUTUBE_API_KEY}`);
    return response.json();
}

const fetchPekoraAllVideoList = async() => {
    console.log("Refreshing Pekora's All Video List...")
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1DCedRgGHBdm81E1llLhOQ&maxResults=50&type=video&key=${process.env.YOUTUBE_API_KEY}`);
    return response.json();
}

const updateCount = async() => {
    const data = await getSubscribersCount();
    return parseInt(data.items[0].statistics.subscriberCount);
}

const updatePekoraMinecraftVideoList = async() => {
    const data = await fetchPekoraMinecraftVideoList();
    return data.items;
}

const getSubscribersCount = async () => {
  console.log("Refreshing Pekora's subscribers count...")
  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC1DCedRgGHBdm81E1llLhOQ&key=${process.env.YOUTUBE_API_KEY}`);
  return response.json();
}

const updatePekoraAllVideoList = async() => {
    const data = await fetchPekoraAllVideoList();
    return data.items;
}

const getCurrentCount = () => currentCount
const getPekoraMinecraftVideoList = () => pekoraMinecraftVideoList;
const getPekoraAllVideoList = () => pekoraAllVideoList;

updateCount();
updatePekoraMinecraftVideoList();
updatePekoraAllVideoList();

setInterval(async() => {
    if (io) {
        const clientsCount = io.engine.clientsCount;
        console.log(`${clientsCount} clients connected`);
        let newCount;
        if (clientsCount > 0) {
            try {
                newCount = await updateCount();
            } finally {
                if (newCount !== currentCount) {
                    currentCount = newCount;
                    console.log("emitting...", currentCount);
                    io.sockets.emit("updateSubscribersCount", currentCount);
                }
            }
        } else {
            console.log("Socket asleep, no clients connected");
        }
    } else {
        console.log("Socket is not connected yet");
    }
}, 10000);

const emmitPekoraMinecraftVideo = async() => {
    if (io) {
        const clientsCount = io.engine.clientsCount;
        console.log(`${clientsCount} clients connected`);
        let newPekoraMinecraftVideoList;
        if (clientsCount > 0) {
            try {
                newPekoraMinecraftVideoList = await updatePekoraMinecraftVideoList();
            } finally {
                if (newPekoraMinecraftVideoList !== pekoraMinecraftVideoList) {
                    pekoraMinecraftVideoList = newPekoraMinecraftVideoList;
                    console.log("emitting pekora minecraft video list...");
                    io.sockets.emit("updatePekoraMinecraftVideoList", pekoraMinecraftVideoList);
                }
            }
        } else {
            console.log("Socket asleep, no clients connected");
        }
    } else {
        console.log("Socket is not connected yet");
    }
}

const emmitAllPekoraVideoList = async() => {
    if (io) {
        const clientsCount = io.engine.clientsCount;
        console.log(`${clientsCount} clients connected`);
        let newPekoraAllVideoList;
        if (clientsCount > 0) {
            try {
                newPekoraAllVideoList = await updatePekoraAllVideoList();
            } finally {
                if (newPekoraAllVideoList !== pekoraAllVideoList) {
                    pekoraAllVideoList = newPekoraAllVideoList;
                    console.log("emitting all pekora video list...");
                    io.sockets.emit("updatePekoraAllVideoList", pekoraAllVideoList);
                }
            }
        } else {
            console.log("Socket asleep, no clients connected");
        }
    } else {
        console.log("Socket is not connected yet");
    }
}

emmitPekoraMinecraftVideo();
emmitAllPekoraVideoList();

setInterval(async() => {
    emmitPekoraMinecraftVideo();
}, 3600000);

setInterval(async() => {
    emmitAllPekoraVideoList();
}, 3600000);

const startSocket = (ioInstance) => {
    io = ioInstance;
    console.log("Socket IO Connected");
}

module.exports = { startSocket, getCurrentCount, getPekoraMinecraftVideoList, getPekoraAllVideoList };
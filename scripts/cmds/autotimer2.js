/*
how to add drive links?
1. upload yout video in google drive
2. make the video privacy anyone with the link
3.copy the video link and put here in the code 
4 additional tips i dwont know it will work on mobile or not but upload your all vidoes at once
after that select all videos and make prvacy anyone with the link in this way you dont have to waste time by changing privacy one by one it work in pc dont know about mobile.
*/

const fs = require('fs');
const axios = require('axios');

const timerFile = 'timer.json';

const driveLinks = [
  "https://drive.google.com/file/d/1nQomeKrHI7-7vahGQsfijO-5Rt_tGdYG/view?usp=drive_link",
  "https://drive.google.com/file/d/1zQqYXyyqXMAnyQwiTA3gDTUAdai7DebZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1zP3jO97ein7glHjjcIN0xI7JIQooTUGd/view?usp=drive_link",
  "https://drive.google.com/file/d/1zLQFjtXyAbTphVRjQmRkVWdvwEtDBycL/view?usp=drive_link",
  "https://drive.google.com/file/d/1z6cSbHugsxf4iXKmlzHa_Qb0VAeFKrAj/view?usp=drive_link",
  "https://drive.google.com/file/d/1ygjpRiqVWUullJA9Fu8bGXGXFVj9ixmb/view?usp=drive_link",
  "https://drive.google.com/file/d/1ya6_KIVRgUOHOucSTF7ceOWv5OJ8xb32/view?usp=drive_link",
  "https://drive.google.com/file/d/1yT1ecqbATHxARVXTa5KIYTusxbQXxFj9/view?usp=drive_link",
  "https://drive.google.com/file/d/1x_ZWasfx_eUaLRkr499cHuSjqACvDocx/view?usp=drive_link",
  "https://drive.google.com/file/d/1xSqfzkH_6ROB49vrgRAJl3jPJn9Z9eBu/view?usp=drive_link",
  "https://drive.google.com/file/d/1xGnPSSlRRmiSRaN6s-9b2dY-ULs_oP7Y/view?usp=drive_link",
  "https://drive.google.com/file/d/1xDO7ib9ozbr-CRWSg2sW4EtjG1xHIN5m/view?usp=drive_link",
  "https://drive.google.com/file/d/1ws14Tu1Sj3tLYee8kXbwxmKAeKU3QZmO/view?usp=drive_link",
  "https://drive.google.com/file/d/1wlFJfxsYGCLpG59WTAEGqkovCHdn8lDq/view?usp=drive_link",
  "https://drive.google.com/file/d/1wjGjVgV6nCNPqMSvyNqBeahnzxcREzMz/view?usp=drive_link",
  "https://drive.google.com/file/d/1wXYzlZpGKRY5w1vhmVtr-nbxC4wlM3TZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1wO46OkC_G99ceBi5aOKb_nac2PNU3F21/view?usp=drive_link",
  "https://drive.google.com/file/d/1wMthfkuguhjN5EIKXmSQJmVum25Ux0-z/view?usp=drive_link",
  "https://drive.google.com/file/d/1wJudaEp0ybV_xynWxUIwlmTyqA3sFZAW/view?usp=drive_link",
  "https://drive.google.com/file/d/1wEkULorVp9umcQZuIaCKs8ssiz0-1naD/view?usp=drive_link",
  "https://drive.google.com/file/d/1w5EBHMGnQWVn_3RtIfHZy_cmCxjzo6lF/view?usp=drive_link",
  "https://drive.google.com/file/d/1vi7XAIezlSeEzDWURv_jv3KE7xwgaE5s/view?usp=drive_link",
  "https://drive.google.com/file/d/1vi3ldazD17AXEb2WJs8qkQOYvqE32CWz/view?usp=drive_link",
  "https://drive.google.com/file/d/1v_Zn1s9VGXHncSmupusvraJ_dVz9Du3v/view?usp=drive_link",
  "https://drive.google.com/file/d/1vFb8L16CjzId0wNGhSnbmnsOW3dWmsXF/view?usp=drive_link",
  // Add more drive links as needed also make the link privacy anyone with the links
];

module.exports = {
  config: {
    name: "autotimer2",
    aliases: [],
    author: "kshitiz",
    version: "3.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "Type '{p}autotimer on' to start sending videos serially every hour, and '{p}autotimer off' to stop."
    },
    category: "send serial auto video",
    guide: {
      en: "{p}autotimer on / off"
    }
  },
  onStart: async function ({ api, event, args }) {
    try {
      const command = args[0];
      const groupID = event.threadID;

      if (command === "on") {
        const lastActivationState = loadLastActivationState();
        const lastActivationTime = loadLastActivationTime();
        const currentIndex = lastActivationState[groupID] ? lastActivationState[groupID].currentIndex || 0 : 0;

        if (!lastActivationState[groupID] || !lastActivationState[groupID].active) {
          startSendingSerialVideos(api, event, groupID, currentIndex);
          api.sendMessage("", groupID);

          lastActivationState[groupID] = { active: true, currentIndex, lastActivationTime: Date.now() };
          saveLastActivationState(lastActivationState);
        } else {
          api.sendMessage("Auto videos are already enabled.", groupID);
        }
      } else if (command === "off") {
        api.sendMessage("Auto videos are now disabled.", groupID);
        stopSendingSerialVideos(groupID);
      } else {
        api.sendMessage("Invalid command. Type '{p}autotimer on' to start,\nand '{p}autotimer off' to stop.", groupID);
      }
    } catch (error) {
      console.error('[ERROR]', error);
      api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
  },
};

let videoIntervalIds = {};

function startSendingSerialVideos(api, event, groupID, currentIndex) {
  sendSerialVideo(api, event, groupID, currentIndex);

  videoIntervalIds[groupID] = setInterval(() => {
    currentIndex = sendSerialVideo(api, event, groupID, currentIndex);
  }, 1 * 60 * 60 * 1000); // Sending every hour
}

async function sendSerialVideo(api, event, groupID, currentIndex) {
  const videoIndex = currentIndex % driveLinks.length;
  const randomDriveLink = driveLinks[videoIndex];
  const fileId = randomDriveLink.match(/\/d\/(.+?)\//)[1];
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await axios({
      method: 'GET',
      url: downloadLink,
      responseType: 'stream',
    });

    api.sendMessage({
      attachment: response.data,
    }, groupID);

  } catch (error) {
    console.error('Error downloading video:', error);
    api.sendMessage({
      body: 'Error downloading the video. Please try again later.',
    }, groupID);
  }

  return currentIndex + 1; 
}

function stopSendingSerialVideos(groupID) {
  clearInterval(videoIntervalIds[groupID]);
  delete videoIntervalIds[groupID];
}

function saveLastActivationState(state) {
  fs.writeFileSync(timerFile, JSON.stringify(state, null, 2));
}

function loadLastActivationState() {
  try {
    const data = fs.readFileSync(timerFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

function saveLastActivationTime(time) {
  fs.writeFileSync(timerFile, JSON.stringify({ lastActivationTime: time }, null, 2));
}

function loadLastActivationTime() {
  try {
    const data = fs.readFileSync(timerFile, 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.lastActivationTime || 0;
  } catch (err) {
    return 0;
  }
}
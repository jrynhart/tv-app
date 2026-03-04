function getRandomChannel() {
  const channels = [
    "channel1.png",
    "channel2.png",
    "channel3.png",
    "channel4.png",
  ];

  const randomIndex = Math.floor(Math.random() * channels.length);
  return channels[randomIndex];
}

function updateChannel() {
  const channelImage = document.getElementById("channel-image");
 
  let randomChannel, currentChannel;

  // get a different channel each time. call getRandomChannel() until it returns a different channel than the current one
  do {
    randomChannel = getRandomChannel();

    // get the current channel from the image source, removing the path to get just the filename
    currentChannel = channelImage.src.substring(channelImage.src.lastIndexOf("/") + 1);
    
  } while (randomChannel === currentChannel);
  
  // set the screen to the new channel image
  channelImage.src = "img/" + randomChannel;
}

function clickDial() {
  const clickAudio = document.getElementById("click-audio");
  clickAudio.play();

  updateChannel();
}




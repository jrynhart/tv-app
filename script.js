function getRandomChannel() {
  const channels = [
    "channel1.png",
    "channel2.png",
    "channel3.png",
    "channel4.png",
    // "./img/channel5.png"
  ];

  const randomIndex = Math.floor(Math.random() * channels.length);
  return channels[randomIndex];
}

function updateChannel() {
  const clickAudio = document.getElementById("click-audio");
  clickAudio.play();

  const channelImage = document.getElementById("channel-image");

  // get a different channel each time the button is clicked
  let rand, currentChannel;
  do {
    rand = getRandomChannel();
    currentChannel = channelImage.src.substring(channelImage.src.lastIndexOf("/") + 1)
  } while (rand === currentChannel);
  
  // set the screen to the new channel image
  channelImage.src = "img/" + rand;
}

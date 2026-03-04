function getRandomChannel() {
  const channels = [
    "./img/channel1.png",
    "./img/channel2.png",
    "./img/channel3.png",
    // "./img/channel4.png",
    // "./img/channel5.png"
  ];

  const randomIndex = Math.floor(Math.random() * channels.length);
  return channels[randomIndex];
}

function updateChannel() {
  const channelImage = document.getElementById("channel-image");
  channelImage.src = getRandomChannel();

  const clickAudio = document.getElementById("click-audio");
  clickAudio.play();
}

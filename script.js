const songs = [
  [
    "beacon",
    "beaconImg.jpg",
    "Beacon is a song i made while in a not very good place mentally. I really like it because \
    some parts of it depict my emotions from then quite well. It's a fusion between darksynth,\
    trance and some electro.",
  ],
  [
    "victory",
    "victoryImg.png",
    "Victory is a song i made after going to my gf. It was such a wholesome experience\
    that i instantly regained motivation to produce. The song is mostly dnb, with a touch of \
    future bass right at the end. Its most notable feature is the fast solo melody during the\
     dnb chorus.",
  ],
  [
    "psychosis",
    "psychosisImg.jpg",
    "Psychosis was largely inspired by Surgeryhead, and the overall aesthetic of cyberpunk.\
    I'm not sure what genre it is, but i tend to categorize it as darksynth. It features a\
     muffled synth melody near the end, that possibly nobody ever noticed. For me personally, that's\
      one of the best parts of the track!",
  ],
  [
    "overload",
    "overloadImg.jpg",
    "Overload is the first song on my channel to ever surpass 1000 views. Granted, maybe not\
     the biggest thing one could achieve, but it was a giant milestone for me. It's also the first\
      track, where i started to really get into the darksynth musical aesthetic. The sounds in this\
       track are far grittier than what i'd usually produce, and none of the parts are (overly) rainbowy.\
      It was one of my most proud creations for a good while. At least before i created Beacon.",
  ],
  [
    "calamity",
    "calamityImg.jpg",
    "Calamity is a weird one. I started it off as a failed collab project. I was supposed to start me and my \
     collab mate off by creating a foundation, but it seems like it was too retro-sounding for him. \
      The track borrows heavily from the aesthetic of older trance music, but it's noticeably more aggressive, \
      especially near the end, when the song modulates and the synths become way louder and more compressed.\
     It also contains some of the funner melodies i wrote :D",
  ],
  [
    "end story",
    "endstoryImg.jpg",
    "It used to be one of my favourite songs that i ever made. Honestly, it's still pretty high, \
    due to the sheer emotional impact that it provides. I made it right after finishing the Monogatari series, \
     equal parts hyped, and sad that it's over. I managed to depict the feeling of parting ways rather well in this song,\
      although my depiction of the last \"farewell\" was way more dramatic than what actually happened in the anime.",
  ],
  [
    "skyscraper",
    "skyscraperImg.jpg",
    "I remember making this one right before i had a big gamedev phase. I remember one of my friends hearing \
     this track and asking if i could write an OST for his game WIP. Instead of helping him, i figured that i want to make \
     a game myself. My engine of choice was gamemaker and, in hindsight, i probably couldn't have picked a worse choice.\
      Anyway, the song has nothing to do with the story, and i don't feel like elaborating any further :v",
  ],
];
function activate(event) {
  let picture = document.querySelector(".cover-art");
  let info = document.querySelector(".information");
  for (let title of songs) {
    document.getElementById(title[0]).classList.remove("active");
    if (title.includes(this.id)) {
      picture.src = title[1];
      info.textContent = title[2];
      console.log(title[1]);
      console.log(title[2]);
    }
  }
  this.classList.add("active");
}
let title = document.getElementById("title");
let cover = document.getElementById("cover");
let area = document.getElementById("area");
function discardFn() {
  let confirmed = confirm("really discard?");
  if (confirmed) {
    //document.querySelector(".editor").remove();
    title.value = "";
    cover.value = "";
    area.value = "";
  }
}
function submit() {
  let newP = document.createElement("p");
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img");
  let sidebar = document.querySelector(".sidebar");

  newDiv.classList.add("sidebar-button");
  newDiv.setAttribute("id", title.value);
  newDiv.addEventListener("click", activate);
  newImg.src = "music note3.png";
  newImg.classList.add("note");
  newP.textContent = title.value;
  sidebar.appendChild(newDiv);

  document.getElementById(title.value).append(newImg, newP);

  const newSongArr = [];
  newSongArr.push(title.value, cover.value, area.value);
  songs.push(newSongArr);

  title.value = cover.value = area.value = "";
}
const buttons = document.querySelectorAll(".sidebar-button");

buttons.forEach((button) => {
  button.addEventListener("click", activate);
});

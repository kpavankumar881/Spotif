console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex =0;
let audioElement = new Audio('Songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('SongItem'));
let songs=[
    {songName:"asaha", filePath:"songs/song1.mp3", coverPath:"covers/image1.avif"},
    {songName:"Cielo - Huma-Huma", filePath:"songs/song2.mp3", coverPath:"covers/image2.jpg"},
    {songName:"DEAF KEV - Invincible [NCS Release]-320k", filePath:"songs/song3.mp3", coverPath:"covers/image3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart [NCS Release]", filePath:"songs/song4.mp3", coverPath:"covers/image4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath:"songs/song5.mp3", coverPath:"covers/image5.jpg"},
    {songName:"Rabba - Salam-e-Ishq", filePath:"songs/song6.mp3", coverPath:"covers/image6.jpg"},
    {songName:"Sakhiyaan - Salam-e-Ishq", filePath:"songs/song7.mp3", coverPath:"covers/image7.jpg"},
    {songName:"Bhula Dena - Salam-e-Ishq", filePath:"songs/song8.mp3", coverPath:"covers/image8.jpg"},
    {songName:"Tumhari Kasam - Salam-e-Ishq", filePath:"songs/song9.mp3", coverPath:"covers/image9.jpg"},
    {songName:"Na Jaana - Salam-e-Ishq", filePath:"songs/song10.mp3", coverPath:"covers/image10.jpg"},
];
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    audioElement=new Audio(songs[i].filePath);
    //element.getElementsByClassName("songlistplay")[0].innerText=audioElement.duration;
})
// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.current<=0){
         makeAllPlays();
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add("fa-circle-pause");
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
         makeAllPlays();
        document.getElementById(songIndex).classList.remove('fa-circle-pause');
        document.getElementById(songIndex).classList.add("fa-circle-play");
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Listen to  Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdata');
    //Update Seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress; 
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        let i=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=songs[i].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})
document.getElementById('farward').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex +=1;
    }
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add("fa-circle-pause");
    audioElement.src=songs[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
document.getElementById('backward').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=9;
    }else{
        songIndex -=1;
    }
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add("fa-circle-pause");
    audioElement.src=songs[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
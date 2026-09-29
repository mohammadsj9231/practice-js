import { MusicCard } from "./musicCard.js";
import { songs } from "./data.js";

customElements.define('music-card', MusicCard);
const songsList = document.querySelector('.songs-list')

songs.forEach((music) => {
  const connect = new MusicCard();
  connect.ettelaat(music)

  songsList.append(connect)
  
})

const startbtn1 = document.querySelector('.play-card-btn-1')
const startbtn2 = document.querySelector('.play-card-btn-2')
const startbtn3 = document.querySelector('.play-card-btn-3')
const startbtn4 = document.querySelector('.play-card-btn-4')

startbtn1.addEventListener('click', () => {
    localStorage.setItem('which', 'buisness')
    console.log('click')
    window.location.href = './player.html'
})

startbtn2.addEventListener('click', () => {
    localStorage.setItem('which', 'mordab')
    window.location.href = './player.html'
})

startbtn3.addEventListener('click', () => {
    localStorage.setItem('which', 'nagoo')
    window.location.href = './player.html'
})

startbtn4.addEventListener('click', () => {
    localStorage.setItem('which', 'yadet')
    window.location.href = './player.html'
})



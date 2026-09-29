export class MusicCard extends HTMLElement {

  ettelaat(song) {
    this.song = song

    this.innerHTML = `
    <div class="music-card">
      <img src="${this.song.cover}" alt="">
      <h2 class="music-name">${this.song.name}</h2>
      <h3 class="music-singer">${this.song.singer}</h3>
      <p class="music-min">${this.song.min}</p>
      <p class="music-year">${this.song.year}</p>
      <button class="play-card-btn-${this.song.id}">▶</button>
    </div>
    `
}

}

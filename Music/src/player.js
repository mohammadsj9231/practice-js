import { songs } from "./data.js";

export class Player extends HTMLElement {

  page(song) {
    this.song = song

    this.innerHTML = `
    <main class="player-page">

      <div class="player-number">
        NOW PLAYING / ${this.song.id}
      </div>


      <section class="player">

        <!-- COVER -->

        <div class="cover">

          <img
            src="${this.song.cover}"
            alt="Album cover"
          />

          <span class="cover-label">
            NOIR / 001
          </span>

        </div>


        <!-- PLAYER INFO -->

        <div class="player-info">

          <p class="small-text">
            Featured track
          </p>

          <p class="artist">
            NOIR / ${this.song.singer}
          </p>


          <!-- PROGRESS -->

          <div class="progress-area">

            <div class="progress-bar">
              <div class="progress"></div>
            </div>

            <div class="time">
              <span class='time-past'></span>
              <span>${this.song.min}</span>
            </div>

          </div>


          <!-- CONTROLS -->

          <div class="controls">

            <button
              class="control-btn"
              id="prevBtn"
              type="button"
            >
              ↶
            </button>

            <button
              class="play-btn"
              id="playBtn"
              type="button"
            >
              ▶
            </button>

            <button
              class="control-btn"
              id="nextBtn"
              type="button"
            >
              ↷
            </button>

          </div>


          <!-- TRACK INFO -->

          <div class="track-info">

            <div>
              <span>GENRE</span>
              <strong>Electronic</strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>${this.song.year}</strong>
            </div>

            <div>
              <span>TRACK</span>
              <strong>${this.song.id} / ${this.song.Alsong}</strong>
            </div>

          </div>

        </div>

      </section>

    </main>


    <!-- =========================
         AUDIO
    ========================= -->

    <audio id="audio" src="${this.song.audio}"></audio>
    `

      const audio = this.querySelector("#audio");

  const playBtn = this.querySelector("#playBtn");
  const nextBtn = this.querySelector("#nextBtn");
  const prevBtn = this.querySelector("#prevBtn");

  const progress = this.querySelector(".progress");


  // PLAY / PAUSE

  playBtn.addEventListener("click", () => {

    if (audio.paused) {

      audio.play();
      playBtn.textContent = "Ⅱ";
      const timePast = document.querySelector('.time-past')
      timePast.textContent = this.song.hesabmin()

    } else {

      audio.pause();
      playBtn.textContent = "▶";

    }

  });


  // PROGRESS

  audio.addEventListener("timeupdate", () => {

    const percent =
      (audio.currentTime / audio.duration) * 100;

    progress.style.width = percent + "%";

  });
  }
}

customElements.define('music-player', Player);

const players = document.querySelector('.ah')

const which = localStorage.getItem('which');

if (which === 'buisness') {
  const st = new Player()
  st.page(songs[0])

  players.append(st)
} else if (which === 'mordab') {
  const st = new Player()
st.page(songs[1])

players.append(st)
} else if (which === 'nagoo') {
  const st = new Player()
st.page(songs[2])

players.append(st)
} else if (which === 'yadet') {
  const st = new Player()
st.page(songs[3])

players.append(st)
}
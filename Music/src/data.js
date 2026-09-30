export const songs = [
  {
    cover: '../media/alboms cover/business.jpg',
    audio: '../media/audio/Tiem - Business.mp3',
    name: 'buisnes',
    singer: 'Tiem',
    min: 149,
    year: '1400',
    Alsong: '4',
    id: '1',

    timer: null,

    hesabmin: function () {
      if (this.timer !== null) {
        return
      }

      this.timer = setInterval(() => {
        this.min--

        console.log(this.min)

        const timePast = document.querySelector('.time-past')
        timePast.textContent = this.min
      }, 1000)
    },

    stopTimer: function () {
      clearInterval(this.timer)
      this.timer = null
    }
  },

  {
    cover: '../media/alboms cover/mordab.jpg',
    audio: '../media/audio/Googoosh - Mordab - ir-Music.ir.mp3',
    name: 'Mordab',
    singer: 'googoosh',
    min: 455,
    year: '1355',
    Alsong: '4',
    id: '2',

    timer: null,

    hesabmin: function () {
      if (this.timer !== null) {
        return
      }

      this.timer = setInterval(() => {
        this.min--

        console.log(this.min)

        const timePast = document.querySelector('.time-past')
        timePast.textContent = this.min
      }, 1000)
    },

    stopTimer: function () {
      clearInterval(this.timer)
      this.timer = null
    }
  },

  {
    cover: '../media/alboms cover/nagoona.jpg',
    audio: '../media/audio/Nagoo Na~GuitarMusics.com.mp3',
    name: 'nagoo na',
    singer: 'Tataloo',
    min: 527,
    year: '1398',
    Alsong: '4',
    id: '3',

    timer: null,

    hesabmin: function () {
      if (this.timer !== null) {
        return
      }

      this.timer = setInterval(() => {
        this.min--

        console.log(this.min)

        const timePast = document.querySelector('.time-past')
        timePast.textContent = this.min
      }, 1000)
    },

    stopTimer: function () {
      clearInterval(this.timer)
      this.timer = null
    }
  },

  {
    cover: '../media/alboms cover/yadetim.jpg',
    audio: '../media/audio/Yadetim Koli.mp3',
    name: 'yadetim kolli',
    singer: 'shaye',
    min: 400,
    year: '1395',
    Alsong: '4',
    id: '4',

    timer: null,

    hesabmin: function () {
      if (this.timer !== null) {
        return
      }

      this.timer = setInterval(() => {
        this.min--

        console.log(this.min)

        const timePast = document.querySelector('.time-past')
        timePast.textContent = this.min
      }, 1000)
    },

    stopTimer: function () {
      clearInterval(this.timer)
      this.timer = null
    }
  }
]
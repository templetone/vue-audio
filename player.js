var app = new Vue({
    el: '#app',
    data: {
        current: {},
        index: 0,
        isPlaying: false,
        sources: [
        {
            title: 'Demo: Sammler & Jäger',
            artist: 'P:lot',
            src: "https://www.andidroid.de/andi/gaudio/sammler_jaeger.mp3"
        },
        {
            title: 'Demo: Halo Daze, Shallow Haze',
            artist: 'Templetone',
            src: "https://www.andidroid.de/andi/gaudio/halo_daze_shallow_haze.mp3"
        }
        ],
        audio: new Audio()
    },
    methods: {
        play: function (song) {
          if (typeof song.src != "undefined") {
            this.current = song;
            this.audio.src = this.current.src;
          }
          this.audio.play();
          
          this.isPlaying = true;
        },
        pause: function () {
          this.audio.pause();
          this.isPlaying = false;
        }
      },
      created () {
        this.current.title = this.sources[this.index].title;
        this.current.artist = this.sources[this.index].artist;
        this.audio.src = this.sources[this.index].src;
      },
    template: 
        `
        <div class="container">
            <div class="row">    
                <header class="col-12 p-2">
                    <h1>Basic Audio Player in Vue.js using HTMLAudioElement</h1>
                </header>
            </div>

            <div class="row">
                <section class="audio col-12 p-2">
                    <h2 class="source-title">Listening to: {{ current.title }} - <span>{{ current.artist }}</span></h2>
                    <div class="controls">
                        <a title="Play" class="play fa fa-play" v-if="!isPlaying" @click="play"></a>
                        <a title="Pause" class="pause fa fa-pause" v-else @click="pause"></a>
                    </div>
                </section>
            </div>

            <div class="row">
                <section class="playlist col-12 p-2">
                    <h3>Can listen to:</h3>
                    <ul>
                        <li v-for="source in sources" :key="source.src" @click="play(source)" :class="(source.src == current.src) ? 'source playing' : 'source'">
                            {{ source.title }} - {{ source.artist }}
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        `
})
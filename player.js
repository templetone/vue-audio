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
        play (song) {
          if (typeof song.src != "undefined") {
            this.current = song;
            this.audio.src = this.current.src;
          }
          this.audio.play();
          
          this.isPlaying = true;
        },
        pause () {
          this.audio.pause();
          this.isPlaying = false;
        }
      },
    template: 
        `
        <div class="container">
            <div class="row">    
                <header class="col-12 p-2">
                    <h1>Basic Audio audio in Vue.js using Html5 Audio</h1>
                </header>
            </div>

            <div class="row">
                <section class="audio col-12 p-2">
                    <h2 class="source-title">{{ current.title }} <span>{{ current.artist }}</span></h2>
                    <div class="controls">
                        <a class="play" v-if="!isPlaying" @click="play">Play</a>
                        <a class="pause" v-else @click="pause">Pause</a>
                    </div>
                </section>
            </div>

            <div class="row">
                <section class="playlist col-12 p-2">
                    <h3>Audio Files</h3>
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
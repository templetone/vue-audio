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
        player: function (source) {
            this.current = source;
            this.audio.src = this.current.src;

            if (this.isPlaying === false) {
                this.audio.play();
                this.isPlaying = true;
                console.log(this.isPlaying);
            }
                else {
                    this.audio.pause();
                    this.isPlaying = false;
                    console.log(this.isPlaying);
                }
        },
      },
    template: 
        `
        <div class="container">
            <div class="row">    
                <header class="col-12 p-2">
                    <h1>Simple Audio audio in Vue.js</h1>
                </header>
            </div>

            <div class="row">
                <section class="audio col-12 p-2">
                    <h2 class="source-title">{{ current.title }} - <span>{{ current.artist }}</span></h2>
                </section>
            </div>

            <div class="row">
                <section class="playlist col-12 p-2">
                    <h3>Audio Files</h3>
                    <ul>
                        <li v-for="source in sources" :key="source.src" @click="player(source)" :class="(source.src == current.src) ? 'source playing' : 'source'">
                            {{ source.title }} - {{ source.artist }}
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        `
})
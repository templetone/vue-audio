var app = new Vue({
    el: '#app',
    data: {
        playlist: {},
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
        },
        {
            title: 'Demo: Phoenix',
            artist: 'P:lot',
            src: "https://www.andidroid.de/andi/gaudio/phoenix.mp3"
        },
        {
            title: 'Demo: Sea Knows When',
            artist: 'Templetone',
            src: "https://www.andidroid.de/andi/gaudio/sea_knows_when.mp3"
        },
        {
            title: 'Demo: 11 12',
            artist: 'P:lot',
            src: "https://www.andidroid.de/andi/gaudio/1112.mp3"
        }
        ],
        audio: new Audio()
    },
    methods: {
        play: function (event) {
            //if audio ist not yet defined, find it in the playlist array
            if (typeof event.src != "undefined") {
                this.playlist = event;
                this.audio.src = this.playlist.src;
            }
            // audio.src is defined, play the audio
            this.audio.play();
            this.isPlaying = true; 
        },
        pause: function () {
            this.audio.pause();
            this.isPlaying = false;
        }
      },
      created () {
        //load first track in playlist-playlist    
        this.playlist.title = this.sources[this.index].title;
        this.playlist.artist = this.sources[this.index].artist;
        //load playlist audio file
        this.playlist = this.sources[this.index];
        this.audio.src = this.playlist.src;
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
                    <h2 class="source-title">You are listening to:  {{ playlist.artist }} - {{ playlist.title }}</h2>
                    <div class="controls">
                        <a title="Play" class="play fa fa-play" v-if="!isPlaying" @click="play"></a>
                        <a title="Pause" class="pause fa fa-pause" v-else @click="pause"></a>
                    </div>
                </section>
            </div>

            <div class="row">
                <section class="playlist col-12 p-2">
                    <h3>You can listen to:</h3>
                    <ul>
                        <li v-for="source in sources" :key="source.src" @click="play(source)" :class="(source.src == playlist.src) ? 'source playing' : 'source'">
                            {{ source.artist }} - {{ source.title }}
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        `
})
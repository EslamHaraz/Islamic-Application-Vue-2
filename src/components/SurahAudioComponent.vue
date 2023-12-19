<template>
  <div class="surah-box p-4 bg-white mt-5 mb-5">
    <div class="parent">
      <div class="surah-details d-Flex justify-content-around w-100 mb-3 flex-wrap">
        <h5 class="m-3">الشيخ {{ this.reciterData.name }}</h5>
        <h5 class="m-3">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</h5>
        <h5 class="m-3">سوره: {{ surahName }}</h5>
      </div>
      <img src="@/assets/islamic-banner.jpg" class="islamic-bg" />
      <audio controls :src="this.serverLink" autoplay class="position"></audio>
    </div>
    <AnimationComponent class="w-100"></AnimationComponent>
  </div>
</template>
<script>
let server = "";
import AnimationComponent from "@/components/AnimationComponent.vue";
export default {
  name: "SurahAudioComponent",
  data() {
    return {
      server,
      surahNumber: this.$route.params.surahNumber,
      serverLink: "",
      reciterData: "",
      surahName: "",
    };
  },
  components: { AnimationComponent },
  mounted() {
    this.checkIfReciter();
    this.checkSurahNumber();
    this.getSurahName();
  },
  methods: {
    checkSurahNumber() {
      if (this.surahNumber < 10) {
        this.serverLink = server + `00${this.surahNumber}.mp3`;
      } else if (this.surahNumber >= 10 && this.surahNumber < 100) {
        this.serverLink = server + `0${this.surahNumber}.mp3`;
      } else {
        this.serverLink = server + `${this.surahNumber}.mp3`;
      }
    },
    checkIfReciter() {
      this.reciterData = JSON.parse(sessionStorage.getItem("reciterData"));
      if (this.reciterData) {
        server = this.reciterData.moshaf[0].server;
      }
    },
    getSurahName() {
      if (sessionStorage.getItem("surah-Name")) {
        this.surahName = sessionStorage.getItem("surah-Name").replace("", " ");
      }
    },
  },
};
</script>
<style scoped>
div.surah-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid var(--first-color);
  border-radius: 5px;
}

.islamic-bg {
  max-width: 100%;
}

audio.position {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

audio::-webkit-media-controls-panel {
  background-color: #c6c6c6;
  color: white;
}

audio::-webkit-slider-thumb {
  color: red;
}

img.islamic-bg {
  max-width: 100%;
}

@media (max-width: 991px) {
  img.islamic-bg {
    display: none !important;
  }

  audio.position {
    position: relative;
    transform: translate(0);
    left: 0;
    top: 0;
  }

  .parent {
    position: absolute;
    color: white;
    z-index: 5;
  }

  audio::-webkit-media-controls-panel {
    background-color: white;
  }

  .surah-box {
    padding: 10px !important;
  }
}
</style>

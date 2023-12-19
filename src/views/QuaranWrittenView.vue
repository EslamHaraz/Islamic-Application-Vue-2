<template>
  <div class="parent p-3 mt-3 bg-white mb-3">
    <h3 class="text-color text-head m-auto p-2">المصحف كامل</h3>
    <div class="parent-box mt-4">
      <div
        class="box-surah mb-2 m-auto"
        @mouseenter="putActiveClass($event)"
        @mouseleave="removeActiveClass($event)"
        v-for="(surah, index) in surahList"
        :key="index"
      >
        <router-link
          :to="{ name: 'SurahWrittenComponent', params: { surahId: surah.number } }"
          >{{ surah.name }}</router-link
        >
        <p class="surah-info text-white" v-if="surah.revelationType == 'Meccan'">
          مكيه عدد اياتها {{ surah.numberOfAyahs }}
        </p>
        <p class="surah-info text-white" v-else>
          مدنيه عدد اياتها {{ surah.numberOfAyahs }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "QuaranWritten",
  data() {
    return {
      surahList: [],
    };
  },
  mounted() {
    this.gatAllSurah();
  },
  methods: {
    gatAllSurah() {
      axios.get(`https://api.alquran.cloud/v1/surah`).then((response) => {
        this.surahList = response.data.data;
      });
    },
    putActiveClass(element) {
      element.srcElement.children[1].classList.add("active");
    },
    removeActiveClass(element) {
      element.srcElement.children[1].classList.remove("active");
    },
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@200;300;400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,800&family=Josefin+Sans:wght@200;300;400;500;700&family=Rajdhani:wght@300;400;500;600;700&display=swap");

.text-head,
.box-surah {
  width: 175px;
  box-shadow: 0px 1px 4px 1px #bdbdbd;
  border: 1px solid #f1f2f3;
  border-radius: 5px;
  font-size: 20px;
  padding: 3px;
  position: relative;
  font-family: "Rajdhani", sans-seri;

  &:hover {
    border: 1px solid var(--first-color);
    color: var(--first-color);
  }
  .surah-info {
    position: absolute;
    top: -35px;
    width: 100%;
    background-color: #525258;
    opacity: 0;
    border-radius: 5px;
    transform: rotateX(-91deg);
  }
  .surah-info.active {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
.parent-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 15px;
  & a {
    color: var(--text-color);
    font-weight: 500;
  }
}
</style>

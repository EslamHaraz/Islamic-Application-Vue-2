<template>
  <div class="parent mt-3 mb-3">
    <div class="d-Flex text-color bg-white p-3 text-end mb-0">
      <h5 class="">السور المتاحه للشيخ {{ this.reciterData.name }}</h5>
      <h5 class="surah-Length">عدد السور ({{ filterSurah.length }})</h5>
    </div>
    <table class="table custom-table">
      <thead>
        <tr>
          <th scope="col" class="surah-number">رقم السوره</th>
          <th scope="col">اسم السوره</th>
          <th scope="col">نوع السوره</th>
          <th scope="col">عدد الايات</th>
          <th scope="col">الاستماع</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(surah, index) in filterSurah" :key="index">
          <td>{{ surah.number }}</td>
          <td>{{ surah.name }}</td>
          <td v-if="surah.revelationType == 'Meccan'">مكيه</td>
          <td v-else>مدنيه</td>
          <td>{{ surah.numberOfAyahs }}</td>
          <td>
            <router-link
              :to="{
                name: 'SurahAudioComponent',
                params: { surahNumber: surah.number },
              }"
              class="listen-link d-block m-auto text-white"
            >
              <p class="w-100 m-0 p-1" @click="setSurahNameInSessionStorage(surah)">
                الاستماع
              </p>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "QuaranAudioView",
  data() {
    return {
      reciterData: "",
      reciterId: "",
      surahList: [],
      surahNumber: [],
    };
  },
  computed: {
    filterSurah() {
      return this.surahList.filter((surah) => {
        if (this.surahNumber.includes(String(surah.number))) {
          return surah;
        }
      });
    },
  },
  mounted() {
    this.reciterData = JSON.parse(sessionStorage.getItem("reciterData"));
    this.surahNumber = this.reciterData.moshaf[0].surah_list.split(",");
    this.checkIfNotRewayah();
    this.gatAllSurah();
  },
  methods: {
    gatAllSurah() {
      if (sessionStorage.getItem("surah-list")) {
        this.surahList = JSON.parse(sessionStorage.getItem("surah-list"));
      } else {
        axios.get(`https://api.alquran.cloud/v1/surah`).then((response) => {
          this.surahList = response.data.data;
          sessionStorage.setItem("surah-list", JSON.stringify(response.data.data));
        });
      }
    },
    checkIfNotRewayah() {
      if (!this.reciterData) {
        this.$router.push({ name: "RecitersView" });
      }
    },
    setSurahNameInSessionStorage(surah) {
      sessionStorage.setItem("surah-Name", JSON.stringify(surah.name));
    },
  },
};
</script>
<style scoped>
td {
  vertical-align: middle;
}
th.surah-number {
  width: 120px;
}
</style>

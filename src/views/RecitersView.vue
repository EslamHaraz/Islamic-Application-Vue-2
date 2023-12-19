<template>
  <div class="parent mt-3 mb-3">
    <div >
      <h5 class="text-color mb-2 text-end">اختر الروايه</h5>
      <select
        @mouseup="getSelectedRewayah()"
        class="form-select w-250 mb-3 custom-select"
        aria-label="Default select example"
        v-model="rewayahId"
      >
        <option :value="rewayah.id" v-for="(rewayah, index) in rewayahList" :key="index">
          {{ rewayah.name }}
        </option>
      </select>
    </div>

    <table class="table custom-table">
      <thead>
        <tr>
          <th scope="col">اسم القارئ</th>
          <th scope="col">عدد السور المتوفره</th>
          <th scope="col">نوع الروايه</th>
          <th scope="col">الاستماع</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reciter, index) in pageOfItems" :key="index">
          <td>{{ reciter.name }}</td>
          <td>{{ reciter.moshaf[0].surah_total }}</td>
          <td>{{ reciter.moshaf[0].name }}</td>
          <td>
            <button
              @click="getId(reciter), redirectClient()"
              class="listen-link d-block m-auto text-white p-1"
            >
              الاستماع
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <jw-pagination
      class="pagination"
      :pageSize="20"
      :items="recitersList"
      @changePage="onChangePage"
      :labels="customLabels"
    >
    </jw-pagination>
  </div>
</template>
<script>
let customLabels = {
  first: "اول",
  last: "اخر",
  previous: "سابق",
  next: "التالي",
};
import JwPagination from "jw-vue-pagination";
import axios from "axios";
export default {
  name: "RecitersView",
  data() {
    return {
      customLabels,
      recitersList: [],
      pageOfItems: [],
      rewayahList: [],
      rewayahId: "",
    };
  },
  mounted() {
    this.getAllReciters();
    this.getAllRewayah();
  },
  components: { JwPagination },

  methods: {
    redirectClient() {
      this.$router.push({ name: "QuaranAudioView" });
    },
    getId(reciter) {
      window.sessionStorage.setItem("reciterData", JSON.stringify(reciter));
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    getAllReciters() {
      if (localStorage.getItem("recitersList")) {
        this.recitersList = JSON.parse(localStorage.getItem("recitersList"));
      } else {
        axios
          .get(`https://www.mp3quran.net/api/v3/reciters?language=ar&rewaya=1?limit=5`)
          .then((response) => {
            this.recitersList = response.data.reciters;
            localStorage.setItem("recitersList", JSON.stringify(response.data.reciters));
          });
      }
    },
    getAllRewayah() {
      axios.get(`https://mp3quran.net/api/v3/riwayat?language=ar`).then((response) => {
        this.rewayahList = response.data.riwayat;
      });
    },
    getSelectedRewayah() {
      if (this.rewayahId == 1) {
        this.recitersList = JSON.parse(localStorage.getItem("recitersList"));
      } else {
        axios
          .get(
            `https://www.mp3quran.net/api/v3/reciters?language=ar&rewaya=${this.rewayahId}`
          )
          .then((response) => {
            this.recitersList = response.data.reciters;
          });
      }
    },
  },
};
</script>
<style lang="scss">
table.custom-table,
table th,
table td {
  border: 1px solid #ddd;
}
th {
  color: var(--first-color) !important;
}
table.custom-table {
  box-shadow: 1px 1px 1px 2px #e7e7e785;
}
.listen-link {
  border: none;
  padding: 2px;
  width: 80px;
  background-color: var(--second-color);
  border-radius: 4px;
  background: linear-gradient(
    342deg,
    rgba(54, 190, 149, 1) 67%,
    rgba(167, 226, 208, 1) 95%,
    rgba(255, 255, 255, 1) 100%
  );
}
select.custom-select {
  position: relative;
  width: 250px;
  z-index: 5;
}
</style>

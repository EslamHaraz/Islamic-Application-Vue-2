<template>
  <div class="timing-box bg-white">
    <h4 class="m-0 mb-2 counter-address fw-bold">المتبقي علي سنه هجريه جديده</h4>
    <div class="d-Flex mt-2 p-2">
      <div>
        <h5 class="fw-bold mb-2">ايام</h5>
        <p class="counter fw-bold p-3">{{ HijriNewYear }}</p>
      </div>
      <div>
        <h5 class="fw-bold mb-2">ساعات</h5>
        <p class="counter fw-bold p-3">{{ remainingOfDay }}</p>
      </div>
      <div>
        <h5 class="fw-bold mb-2">دقايق</h5>
        <p class="counter fw-bold p-3">{{ remainingOfHour }}</p>
      </div>
      <div>
        <h5 class="fw-bold mb-2">ثواني</h5>
        <p class="counter fw-bold p-3">{{ seconds }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HijriNewYearComponent",
  data() {
    return {
      HijriNewYear: 203,
      remainingOfDay: "",
      remainingOfHour: "",
      seconds: "",
      Date: new Date(),
    };
  },
  mounted() {
    this.hijriNewYear();
  },
  methods: {
    hijriNewYear() {
      this.seconds = this.Date.getSeconds();
      this.remainingOfDay = 24 - this.Date.getHours();
      this.remainingOfHour = 60 - this.Date.getMinutes();
      setInterval(() => {
        this.seconds++;
        if (this.seconds == 60) {
          this.remainingOfHour = this.remainingOfHour - 1;
          this.seconds = 1;
        }
        if (this.remainingOfHour == 0) {
          this.remainingOfDay = this.remainingOfDay - 1;
          this.remainingOfHour = 60 - this.Date.getMinutes();
        }
      }, 1000);
    },
  },
};
</script>

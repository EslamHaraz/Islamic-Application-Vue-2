<template>
  <div class="timing-box bg-white">
    <h4 class="m-0 mb-2 counter-address fw-bold">المتبقي علي رمضان</h4>
    <div class="d-Flex mt-2 p-2">
      <div>
        <h5 class="fw-bold mb-2">ايام</h5>
        <p class="counter fw-bold p-3">{{ ramdanDays }}</p>
      </div>
      <div>
        <h5 class="fw-bold mb-2">ساعات</h5>
        <p class="counter fw-bold p-3">{{ this.remainingOfDay }}</p>
      </div>
      <div>
        <h5 class="fw-bold mb-2">دقايق</h5>
        <p class="counter fw-bold p-3">{{ this.remainingOfHour }}</p>
      </div>
      <div>
        <h5 class="fw-bold mb-2">ثواني</h5>
        <p class="counter fw-bold p-3">{{ this.seconds }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RamdanComponent",
  data() {
    return {
      ramdanDays: 84,
      remainingOfDay: "",
      remainingOfHour: "",
      seconds: "",
      Date: new Date(),
    };
  },
  mounted(){
    this.untilRamadan()
  },
  methods: {
    untilRamadan() {
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
<style>
.timing-box {
  background-color: #f2f5fa;
  padding: 10px;
}
.counter {
  font-size: 30px;
  background-color: #f2f5fa;
  border-radius: 4px;
  width: 120px;
}
.counter-address {
  color: var(--first-color);
}
</style>

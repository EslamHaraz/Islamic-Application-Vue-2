<template>
  <div class="parent mt-3 mb-3">
    <div class="bg-white p-3 date-box b-radius-5">
      <div class="date-timing d-Flex">
        <h5 class="fw-bold">
          {{ this.Date.getFullYear() }}-{{ this.Date.getMonth() + 1 }}-{{
            this.Date.getDate() - 1
          }}
          | {{ this.Date.getHours() }}:{{ this.Date.getMinutes() }}
        </h5>
        <h5 class="fw-bold">{{ hijriDate }}</h5>
      </div>
      <div class="date-day d-Flex mt-3">
        <h4 class="fw-bold">{{ dayName }}</h4>
        <h4 class="fw-bold">{{ monthName }}</h4>
      </div>

      <div class="prayer-timing mt-2 bg-white b-radius-5">
        <div class="box p-2 text-end">
          <h5 class="fw-bold">اذان الفجر</h5>
          <h5 class="fw-bold mt-2">{{ prayersHours[0] }}</h5>
        </div>
        <div class="box p-2 text-end">
          <h5 class="fw-bold">وقت الشروق</h5>
          <h5 class="fw-bold mt-2">{{ prayersHours[1] }}</h5>
        </div>
        <div class="box p-2 text-end">
          <h5 class="fw-bold">اذان الظهر</h5>
          <h5 class="fw-bold mt-2">{{ prayersHours[2] }}</h5>
        </div>
        <div class="box p-2 text-end">
          <h5 class="fw-bold">اذان العصر</h5>
          <h5 class="fw-bold mt-2">
            {{ prayersHours[3] }}:{{ prayerMinutes[3] }}
          </h5>
        </div>
        <div class="box p-2 text-end">
          <h5 class="fw-bold">اذان المغرب</h5>
          <h5 class="fw-bold mt-2">
            {{ prayersHours[5] }}:{{ prayerMinutes[4] }}
          </h5>
        </div>
        <div class="box p-2 text-end">
          <h5 class="fw-bold">اذان العشاء</h5>
          <h5 class="fw-bold mt-2">
            {{ prayersHours[6] }}:{{ prayerMinutes[6] }}
          </h5>
        </div>
      </div>
    </div>
    <div class="other-timing position-relative mt-4">
      <RamdanComponent></RamdanComponent>
      <EidAlFetrComponent></EidAlFetrComponent>
      <EidEladhaComponent></EidEladhaComponent>
      <HijriNewYearComponent></HijriNewYearComponent>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RamdanComponent from "@/components/OccasionsComponent/RamdanComponent.vue";
import EidAlFetrComponent from "@/components/OccasionsComponent/EidAlFetrComponent.vue";
import EidEladhaComponent from "@/components/OccasionsComponent/EidEladhaComponent.vue";
import HijriNewYearComponent from "@/components/OccasionsComponent/HijriNewYearComponent.vue";
export default {
  name: "PrayerTimesView",
  data() {
    return {
      prayersNames: ["الفجر", "الشروق", "الظهر", "العصر", "المغرب", "العشاء"],
      hijriDate: "",
      dateDetails: "",
      prayerTimings: "".split(""),
      prayersHours: [],
      prayerMinutes: [],
      monthName: "",
      monthNumber: "",
      dayNumber: "",
      dayName: "",
      Date: new Date(),
    };
  },
  components: {
    RamdanComponent,
    EidAlFetrComponent,
    EidEladhaComponent,
    HijriNewYearComponent,
  },
  mounted() {
    this.checkGeolocation();
    this.untilRamadan();
  },
  methods: {
    checkGeolocation() {
      if (
        sessionStorage.getItem(`prayerTimings`) &&
        sessionStorage.getItem("dateDetails")
      ) {
        this.dateDetails = JSON.parse(sessionStorage.getItem("dateDetails"));
        this.prayerTimings = JSON.parse(
          sessionStorage.getItem("prayerTimings")
        );
        this.monthName = this.dateDetails.hijri.month.ar;
        this.dayName = this.dateDetails.hijri.weekday.ar;
        this.hijriDate = this.dateDetails.hijri.date;
        this.convertTime();
        this.getMinutes();
      } else {
        let date = new Date();
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            axios
              .get(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=eg`
              )
              .then((response) => {
                axios
                  .get(
                    `http://api.aladhan.com/v1/calendarByCity/2023/${
                      date.getMonth() + 1
                    }?city=${response.data.city}&country=${
                      response.data.countryName
                    }?language=ar&method=2`
                  )
                  .then((response) => {
                    sessionStorage.setItem(
                      "prayerTimings",
                      JSON.stringify(
                        response.data.data[date.getDate() - 1].timings
                      )
                    );
                    sessionStorage.setItem(
                      "dateDetails",
                      JSON.stringify(
                        response.data.data[date.getDate() - 1].date
                      )
                    );
                    location.reload();
                  })
                  .catch(() => {
                    alert(
                      "Error In Get Your Location Please Check Your Browser And Try Again"
                    );
                  });
              });
          });
        } else alert("Geolocation is not supported by this browser.");
      }
    },
    convertTime() {
      Object.values(this.prayerTimings).map((ele) => {
        if (parseInt(ele) > 12) {
          this.prayersHours.push(parseInt(ele) - 10 - 2);
        } else {
          this.prayersHours.push(ele.slice(0, 6));
        }
      });
    },
    getMinutes() {
      Object.values(this.prayerTimings).map((ele) => {
        this.prayerMinutes.push(ele.slice(3, -5).replaceAll(" ", ""));
      });
    },
    untilRamadan() {
      let s = 0;
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
      this.Date.setDate(20);
      for (let i = 18; i <= 85; i++) {
        s = i;
      }
    },
  },
};
</script>
<style scoped>
.date-day {
  color: var(--first-color);
}
.next-prayer,
.box {
  color: white;
  background: rgb(96, 194, 98);
  background: linear-gradient(
    199deg,
    rgba(96, 194, 98, 1) 24%,
    rgba(96, 194, 98, 0.969625350140056) 39%,
    rgba(54, 190, 149, 1) 65%
  );
  border-radius: 5px;
}
.prayer-timing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}
.b-radius-5 {
  border-radius: 5px;
}
.other-timing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 10px;
}
</style>

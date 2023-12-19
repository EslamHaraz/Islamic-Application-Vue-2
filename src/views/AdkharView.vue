<template>
  <div class="parent mt-3">
    <div class="text-end bg-white p-3">
      <h4 class="text-end bg-white p-3 text-head border-b">{{ selectedAdkhar[0] }}</h4>
      <div class="adkhar-box mt-3">
        <h5
          @click="decrementCount(dhikr)"
          v-for="(dhikr, index) in selectedAdkhar[1]"
          :key="index"
          class="box-component dhikr-text text-color text-end p-2 mb-3 cursor-ponter"
        >
          ({{ index + 1 }}) {{ dhikr.content }}
          <h6 class="text-start mt-3">
            <h6 v-if="dhikr.count > 0" class="me-2 w-100">العدد : {{ dhikr.count }}</h6>
            <FontAwesome :icon="['fas', 'check']" v-else class="check me-2" />
          </h6>
          <h6 class="description-text" v-if="dhikr.description">
            الثواب : {{ dhikr.description }}
          </h6>
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
import adkhar from "@/Json/adkar.json";
export default {
  name: "AdkharView",
  data() {
    return {
      adkhar,
      adkharIndex: this.$route.params.adkarIndex,
      selectedAdkhar: Object.entries(adkhar)[this.$route.params.adkarIndex],
      count: "",
    };
  },
  mounted() {
    console.log(Object.entries(adkhar)[this.adkharIndex]);
  },
  methods: {
    decrementCount(value) {
      if (value.count > 0) {
        value.count--;
      } else {
        return;
      }
    },
  },
};
</script>
<style scoped>
.text-head {
  width: fit-content;
}
.dhikr-text {
  line-height: 1.8;
}
svg.check {
  background-color: var(--first-color);
  padding: 3px;
  border-radius: 50%;
  color: white;
}

svg.angle {
  transform: rotate(180deg);
}
</style>

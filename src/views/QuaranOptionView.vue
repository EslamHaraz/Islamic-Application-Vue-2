<template>
  <div class="parent d-Flex flex-wrap p-3 ">
    <div class="quaran-text mb-3">
      <img src="@/assets/quaran-text.png" class="img-width mb-3" />
      <h5 class="brief mb-3">
        عليك بذكر الله وتلاوه القرأن فأنه روحك في السماء وذكرك في الارض
      </h5>

      <router-link
        :to="{ name: 'QuaranWritten' }"
        class="link w-100 d-block p-1 text-white"
      >
        قرأه القرأن
        <img src="@/assets/quran_6565365.png" class="moshaf-icon me-2" />
      </router-link>
    </div>
    <div class="quaran-audio mb-3">
      <img src="@/assets/quaran-audio.png" class="img-width mb-3" />
      <h5 class="brief mb-3">
        من استمع الي ابه من كتاب الله كتب له حسنه مضاعفه ومن تلاها كانت له نور يوم القيامه
      </h5>
      <router-link :to="{name:'RecitersView'}" class="link w-100 d-block p-1 text-white">
        الاستماع الي القرأن
        <img src="@/assets/headset_5799214.png" class="moshaf-icon me-2" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuaranView",
};
</script>
<style scoped>
.parent {
  justify-content: space-evenly !important;
  min-height: 90vh;
}
.quaran-text,
.quaran-audio {
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  width: 400px;
}
img.img-width {
  width: 300px;
  background: linear-gradient(
    0deg,
    rgba(72, 186, 135, 1) 3%,
    rgba(73, 186, 136, 1) 1%,
    rgba(75, 187, 137, 1) 2%,
    rgba(75, 187, 137, 1) 4%,
    rgba(80, 189, 140, 1) 9%,
    rgba(81, 190, 141, 1) 1%,
    rgba(80, 189, 140, 1) 3%,
    rgba(92, 194, 148, 1) 17%,
    rgba(111, 201, 160, 1) 27%,
    rgba(161, 220, 193, 1) 45%,
    rgba(176, 226, 203, 1) 57%,
    rgba(255, 255, 255, 1) 95%
  );
  padding: 16px;
  border-radius: 5px;
}
.brief {
  font-size: 15px;
  font-weight: 600;
}
.link {
  background-color: var(--first-color);
  font-size: 17px;
  font-weight: bold;
}
.moshaf-icon {
  width: 30px;
  vertical-align: bottom;
}
</style>

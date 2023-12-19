<template>
  <div class="parent flex-wrap mt-5">
    <div class="brief">
      <h2 class="text-white m-0 site-name position-relative mb-4">اسلام ويب</h2>
      <h6 class="text-color brief-text">
        سنطلعكم من خلال صفحات موقعنا علي مزايا ومقتطفات من الدين الاسلامي عن
        طريق قرأه القرأن الكريم وقرأه تفسير الايات والاستماع الي القرأن بصوت
        العديد من الشيوخ كما يمكنك الاستماع الي خطب بعد الشيوخ وقرأه الاحاديث
        وتفسيرها ومصدرها كما يمكنك قرأه الاذكار والادعيه وقرأه اسئله دينيه
        واجابتها
      </h6>
      <div class="social-icons d-Flex">
        <a href="https://www.facebook.com/profile.php?id=61550077094703">
          <FontAwesome :icon="['fab', 'facebook']" />
        </a>
        <a href="https://www.linkedin.com/in/eslam-haraz-168082288/">
          <FontAwesome :icon="['fab', 'linkedin']" />
        </a>
        <a href="">
          <img src="@/assets/Gmail.png" />
        </a>
      </div>
    </div>
    <img src="@/assets/home.png" class="main-background" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped lang="scss">
.parent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  gap: 20px;
  background-color: white;
  img.main-background {
    max-width: 100%;
    width: 550px;
  }
  .brief-text {
    max-width: 450px;
    line-height: 1.7;
    font-weight: 600;
  }
  h2.site-name {
    width: 100%;
    padding: 10px;
    background-color: var(--first-color);
    font-weight: bold;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      border: 30px solid;
    }
    &::before {
      left: 0;
      border-color: transparent transparent transparent var(--body-color);
    }

    &::after {
      right: 0;
      border-color: transparent var(--body-color) transparent transparent;
    }
  }
  & .social-icons {
    width: 250px;
    margin: 20px auto 0px;
    svg {
      font-size: 30px;
    }
    img {
      width: 30px;
    }
  }
  @media (max-width: 1991px) {
    .parent {
      flex-direction: column;
    }
  }
}
</style>

<template>
  <nav class="position-fixed bg-white" :class="{ active: sidebarStatus }">
    <div @click="openSidebar()">
      <router-link
        :to="link.linkPath"
        exact
        class="text-color"
        v-for="(link, index) in linksArray"
        :key="index"
        >{{ link.linkName }}</router-link
      >
    </div>
    <FontAwesome
      :icon="['fas', 'bars']"
      class="bars-icon position-absolute text-white"
      @click="openSidebar()"
    />
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      linksArray: [
        {
          linkName: "الرئيسه",
          linkPath: "/home",
        },
        {
          linkName: "القرأن الكريم",
          linkPath: "/Quaran-Kareem",
        },
        {
          linkName: "مواقيت اسلاميه",
          linkPath: "/islamic-Prayers",
        },
        {
          linkName: "الاحاديث",
          linkPath: "/AhadithsCategries",
        },
        {
          linkName: "الكتب",
          linkPath: "/BooksCategories",
        },
        {
          linkName: "الاذكار",
          linkPath: "/CategoriesOfDhikr",
        },
        {
          linkName: "الادعيه",
          linkPath: "/Prayers",
        },
        {
          linkName: "المطور",
          linkPath: "/developer",
        },
      ],
    };
  },
  name: "NavbarComponent",
  computed: {
    ...mapState({
      sidebarStatus: (state) => state.sidebarStatus,
    }),
  },
  methods: {
    openSidebar() {
      this.$store.commit("openSidebar");
    },
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  width: 210px;
  border-radius: 10px;
  padding: 15px;
  right: -195px;
  z-index: 10;
  min-height: 600px;
  top: 100px;
  &.active {
    right: 0;
  }
  a {
    &:hover {
      background-color: #42b88333;
    }
    &::before {
      content: "";
      right: -10px;
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: var(--first-color);
      border-radius: 10px;
    }

    text-decoration: none;
    display: block;
    font-weight: bold;
    color: #2c3e50;
    padding: 2px;
    border-radius: 4px;
    position: relative;
    margin-bottom: 20px;
    &.router-link-exact-active {
      color: white;
      background-color: var(--first-color);
    }
  }
  .bars-icon {
    position: absolute;
    left: -35px;
    top: 250px;
    font-size: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 5px;
    border: 2px solid;
    background-color: var(--first-color);

    border: 5px solid #f2f5fa;
  }
}
</style>

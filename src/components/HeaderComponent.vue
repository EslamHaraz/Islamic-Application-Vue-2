<template>
  <header class="parent d-Flex p-3">
    <h1 class="first-color mb-0 mt-0">اسلام ويب</h1>
    <div class="input-group custom-group">
      <input type="text" class="form-control input-radius text-end" placeholder="البحث" />
      <div class="input-group-append">
        <span class="input-group-text search-icon" id="basic-addon2">
          <FontAwesome :icon="['fas', 'search']" />
        </span>
      </div>
    </div>
  
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style scoped>
header {
  background-color: white;
}
.custom-group {
  width: 250px;
}
.search-icon {
  height: 100%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: var(--second-color);
  color: white;
}
.input-radius {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: var(--body-color);
}
</style>

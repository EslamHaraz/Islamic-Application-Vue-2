<template>
  <div class="parent position-relative">
    <div class="card-box bg-white">
      <div class="bg-green">
        <img src="@/assets/Developer.png" class="devloper-img" />
      </div>
      <div class="details">
        <h3 class="name fw-bold">Eslam Haraz</h3>
        <h5 class="jop fw-bold">Front End Developer</h5>
      </div>
      <div class="social-links mt-4 d-Flex justify-content-evenly flex-wrap">
        <a href="https://www.facebook.com/profile.php?id=61550077094703">
          <FontAwesome :icon="['fab', 'facebook']" class="facebook" />
        </a>
        <a href="https://www.linkedin.com/in/eslam-haraz-168082288/">
          <FontAwesome :icon="['fab', 'linkedin']" class="linkedin" />
        </a>
        <a href="https://wa.me/01274086729">
          <FontAwesome :icon="['fab', 'whatsapp']" class="whatsapp" />
        </a>
      </div>
      <div class="skills-box flex-wrap mt-4">
        <h4 class="mb-3 text-start ms-3">: My Skills</h4>
        <div class="d-Flex mb-3 justify-content-evenly">
          <FontAwesome :icon="['fab', 'html5']" class="html5" />
          <FontAwesome :icon="['fab', 'css3-alt']" class="css3-alt" />
          <FontAwesome :icon="['fab', 'js']" class="js" />
        </div>
        <div class="d-Flex justify-content-evenly">
          <FontAwesome :icon="['fab', 'bootstrap']" class="bootstrab" />
          <FontAwesome :icon="['fab', 'vuejs']" class="vuejs" />
          <FontAwesome :icon="['fab', 'sass']" class="sass" />
          <FontAwesome :icon="['fab', 'git']" class="git" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeveloperView",
};
</script>
<style scoped>
.parent {
  min-height: 90vh;
}
.card-box {
  position: absolute;
  width: 450px;
  height: 650px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
}
.bg-green {
  height: 250px;
  background-color: var(--first-color);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.devloper-img {
  width: 200px;
  border-radius: 50%;
  height: 200px;
  border: 5px solid white;
  position: absolute;
  left: 50%;
  top: 218px;
  transform: translate(-50%, -50%);
}
.details {
  margin-top: 70px;
}
h5.jop {
  color: #838383;
  letter-spacing: 2px;
}
h3.name {
  letter-spacing: 4px;
}
.social-links svg,
.skills-box svg {
  font-size: 30px;
}
.social-links svg:hover {
  transform: scale(1.5);
}
svg.facebook {
  color: #4267b2;
}
svg.linkedin {
  color: #0077b5;
}
svg.whatsapp {
  color: #25d366;
}
svg.html5 {
  color: #e34c26;
}
svg.css3-alt {
  color: #264de4;
}
svg.js {
  color: #f0db4f;
}
svg.bootstrab {
  color: #563d7c;
}
svg.vuejs {
  color: #41b883;
}
svg.sass {
  color: #cc6699;
}
svg.git {
  color: #f1502f;
}
</style>

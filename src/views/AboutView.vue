<template>
  <!-- <div class="row bg-dark p-0 m-0">
    <div class="col-12 col-sm-6 col-md-6 p-2 m-0 text-start">
      <img
        class="border-left"
        src="https://i.postimg.cc/vmDx8JDh/C12-C1-Sid.png"
        alt=""
      />
    </div>
    <div
      class="col-12 col-sm-6 col-md-6 p-2 m-0 text-center p-3 border-start border-secondary"
    >
      <h1 class="animate__animated animate__fadeIn">About Me</h1>
      <h4
        class="animate__animated animate__flash animate__slower animate__delay-3s animate__infinite"
      >
        Aspiring Web Developer
      </h4>
      <p>
        I am a passion driven young man who likes challenges. I work well with
        others and posses great leadership qualities. I am an attentive, focused
        and work well under pressure. I am quick to learn and have a fresh mind
        and eye for creativity.I am devoted in what I do and consider myself an
        asset wherever I am.
      </p>
    </div>
  </div> -->
  <div class="bg-dark">
    <h1 class="animate__animated animate__fadeIn">About Me</h1>
    <h4
      class="animate__animated animate__flash animate__slower animate__delay-3s animate__infinite"
    >
      Aspiring Web Developer
    </h4>
    <div v-if="Me" class="bg-dark p-4">
      <AboutMeComp id="" v-for="andMe of Me" :key="andMe.id" :andMe="andMe" />
    </div>
    <div v-else>Processing....</div>
  </div>
</template>
<script>
import AboutMeComp from "@/components/AboutMeComp.vue";
export default {
  computed: {
    Me() {
      return this.$store.state.Me;
    },
  },
  mounted() {
    this.$store.dispatch("getMe");
  },
  components: { AboutMeComp },
};
</script>
<style scoped>
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */
.animate__animated.animate__flash {
  --animate-duration: 6s;
  animation-play-state: running;
}

h4 {
  color: #cbe4de;
}

p {
  color: wheat;
}
span {
  text-decoration: none;
}
h1 {
  color: #cbe4de;
  text-decoration: underline #cbe4de;
}
img {
  width: 20vh;
}
@media screen and (max-width: 300px) {
  
  img {
    height: 50%;
  }
}

.row {
  width: 100%;
}
</style>

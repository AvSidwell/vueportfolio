<template>
  <div
    class="col-12 col-lg-4 col-md-4 col-sm-3"
    :to="{ title: 'myProject', params: { id: myProject.id } }"
  >
    <div class="cardStyle mt-5 con">
      <img class="img mb-2" :src="myProject.image" :alt="myProject" />
      <div class="div con2" id="con2">
        <p class="border-bottom">{{ myProject.desc }}</p>
        <button>
          <a
            class="tags nav-link animate__animated animate__flash animate animate__infinite infinite" target="_blank"
            :href="myProject.netlify"
            >Netlify Link</a
          >
        </button>
        <button>
          <a
            class="tags nav-link animate__animated animate__flash animate animate__infinite infinite" target="_blank"
            :href="myProject.github"
            >GitHub</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myProject"],
};
</script>

<style scoped>
.cardStyle {
  border-radius: 0.5rem;
}
button {
  margin-top: 0.8rem;
  margin-left: 0.8rem;
  border-radius: 2rem;
  text-align: center;
  background-color: #cbe4de;
}
.animate__animated.animate__flash {
  color: #2e4f4f;
  background-color: #cbe4de;
  --animate-duration: 10s;
}

@media screen and(max-width: 300px) {
  .animate__animated.animate__flash {
    animation-play-state: paused;
  }
}
.animate__animated.animate__flash:hover {
  color: #2e4f4f;
}
.cardStyle {
  background-color: #2e4f4f;
  height: 25rem;
}

#con2 p {
  visibility: hidden;
}

p {
  font-size: larger;
  text-decoration: none !important;
  color: #cbe4de;
  visibility: hidden;
}
.tags {
  visibility: hidden;
}
#con2:hover  {
  height: 100%;
  width: 100%;
  visibility: hidden;
}
#con2:hover  {
  visibility: visible;
}
#con2:hover button  {
  visibility: visible;
}
#con2:hover .tags {
  visibility: visible;
}
#con2:hover p {
  visibility: visible;
}

#con2:hover a {
  visibility: visible;
}

.img {
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  width: 100%;
  height: 15rem;
}
</style>

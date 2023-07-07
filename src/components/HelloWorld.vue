<template>
  <img src="https://i.postimg.cc/xCPGYPgf/home2.jpg" alt="" />

  <h1 class="animate__animated animate__backInUp">Sidwell</h1>
  <h3>Aspiring Web <span>Developer</span></h3>
  <img class="img" src="https://i.postimg.cc/vmDx8JDh/C12-C1-Sid.png" alt="Sidwell">
  <p class="animate__animated animate__rotateIn animate__faster animate__infinite	infinite">+</p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=IBM+Plex+Sans:wght@100&display=swap");
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */
.img {
  position: absolute;
  border-radius: 50%;
  top: 80%;
  left: 46%;
  height: 7rem;
  width: 7rem;
}
p {
  font-size: 4rem;
  position: absolute;
  top: 86%;
  left: 49%;
}
img {
  width: 100%;
  height: 90vh;
}

h1 {
  position: absolute;
  font-size: 8.5rem;
  top: 25%;
  left: 32%;
  color: #2ea287;
}
h3 {
  position: absolute;
  font-size: 2rem;
  top: 22%;
  left: 32%;
  color: #0e8388;
}

h1 {
  font-family: "Caprasimo", cursive;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: bolder;
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 6rem;
    top: 23%;
    left: 10%;
    color: #37c7a5;
    font-weight: bolder;
  }
  h3 {
    font-size: 2rem;
    top: 38%;
    left: 12%;
    color: #0e8388;
  }
  span {
    position: absolute;
    top: 98%;
    left: 32%;
  }
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 5rem;
    top: 23%;
    left: 10%;
    color: #37c7a5;
    font-weight: bolder;
  }
  h3 {
    font-size: 2rem;
    top: 35%;
    left: 12%;
    color: #0e8388;
  }
  span {
    position: absolute;
    top: 98%;
    left: 32%;
  }

  .img {
  position: absolute;
  top: 80%;
  left: 40%;
  height: 7rem;
  width: 7rem;
}
}
</style>

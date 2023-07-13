<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-6 p-2 m-0 text-start">
      <img :src="andMe.image" alt="" />
    </div>
    <div class="col-12 col-sm-6 col-md-6 p-2 m-0 pt-5 text-center">
      <p class="play er1">{{ andMe.pText }}</p>
      <br />
      <br />
      <p class="play">{{ andMe.pText2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["andMe"],
};
</script>
<style>
 /*#2e4f4f #0e8388 #cbe4de*/
 img {
    width: 100%;
    height: 20vh;
 }
 .er1 {
    margin-top: 2rem;
 }
.play {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #2e4f4f 0%,
    #0e8388 29%,
    #cbe4de 67%,
    #2e4f4f 100%
  );
  background-size: 200% auto;
  color: #fff;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  animation: colorChange 7s linear infinite; 
  font-size: 17px;
  font-weight: 100;
}

@keyframes colorChange {
  to {
    background-position: 200% center;
  }
}
</style>

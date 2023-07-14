<template>
  <div class="holder">
    <div class="row">
      <div class="click col-12 col-md-4 col-sm-12" tabindex="1">
        <div class="tbn">
          <img :src="myTestimonial.picture" :alt="myTestimonial.name" />
          <h2><span>Name: </span>{{ myTestimonial.name }}</h2>
          <p><span>Status: </span>{{ myTestimonial.status }}</p>
        </div>
      </div>
      <div class="hidden col-12 col-md-8 col-sm-12 dis">
        <h5>{{ myTestimonial.view }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["myTestimonial"],
};
</script>
<style scoped>
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */

h2 {
  margin-top: 0.6;
  text-align: start;
}

span {
  text-align: start;
  color: #2e4f4f;
  font-size: small;
  text-decoration: underline;
}
p {
  text-align: start;
}

img {
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  margin-top: 0.3rem;
  margin-right: 0.5rem;
  float: left;
  /* margin-right: 100%; */
}

.holder {
  background-color: black;
}
.row {
  background-color: #2e4f4f;
}
.click {
  background-color: #cbe4de;
  color: #0e8388;
  outline: none;
  cursor: pointer;
  height: 100px;
}
.click2 {
  background-color: #0e8388;
  color: #cbe4de;
  outline: none;
  cursor: pointer;
  height: 100px;
}
.click3 {
  background-color: #cbe4de;
  color: #0e8388;
  outline: none;
  cursor: pointer;
  height: 100px;
}
.click4 {
  background-color: #0e8388;
  color: #cbe4de;
  outline: none;
  cursor: pointer;
  height: 100px;
}
.click5 {
  background-color: #cbe4de;
  color: #0e8388;
  outline: none;
  cursor: pointer;
  height: 100px;
}
.click6 {
  background-color: #0e8388;
  color: #cbe4de;
  outline: none;
  cursor: pointer;
  height: 100px;
}

.hidden {
  display: none;
  background-color: #2e4f4f;
  color: #cbe4de;
}
.hidden2 {
  display: none;
  background-color: #2e4f4f;
  color: #cbe4de;
}
.hidden3 {
  display: none;
  background-color: #2e4f4f;
  color: #cbe4de;
}
.hidden4 {
  display: none;
  background-color: #2e4f4f;
  color: #cbe4de;
}
.hidden5 {
  display: none;
  background-color: #2e4f4f;
  color: #cbe4de;
}
.hidden6 {
  display: none;
  background-color: #2e4f4f;
  color: #cbe4de;
}

.click:focus + .hidden {
  display: block;
  top: 6rem;
}
.click2:focus + .hidden2 {
  display: block;
}
.click3:focus + .hidden3 {
  display: block;
}
.click4:focus + .hidden4 {
  display: block;
}
.click5:focus + .hidden5 {
  display: block;
}
.click6:focus + .hidden6 {
  display: block;
}

.dis {
  position: absolute;
  top: 3.45rem;
  height: 600px;
  width: 40rem;
  left: 38rem;
  padding-top: 15rem;
  padding: 5rem;
}

/* @media screen and (max-width: 1200px) {
  .tbn {
    width: 50%;
  }
} */
@media screen and (max-width: 700px) {
  .tbn {
    width: 100vw;
  }
  .dis {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 1rem;
    padding: 0.04;
    font-size: 2px;
    text-align: center;
    width: 100%;
  }
}
@media screen and (max-width: 300px) {
  /* .dis {
    display: block;
    position: relative;
    width: 100%;

  } */
  /* .dis {
   position: relative;
    left: 0;
    top: 5%;
    font-size: 10px;
    padding: 0;
  }  */

  h2 {
    font-size: large;
  }

  .dis {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 0.3rem;
    padding: 0.02;
    font-size: 4px;
    text-align: center;
    width: 100%;
  }
}
</style>

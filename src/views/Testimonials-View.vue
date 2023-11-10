<template>
  <div>
    <!-- <div class="holder">
      <div class="container">
        <div class="row">
          <div class="click col-12 col-md-4 col-sm-6" tabindex="1">
            <div class="tbn">
              <img
                src="https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg"
                alt=""
              />
              <h2><span>Name: </span>Person Five</h2>
              <p><span>Status: </span> Classmate</p>
            </div>
          </div>
          <div class="hidden col-12 col-md-8 col-sm-6 dis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            distinctio quaerat hic illum odit fugit autem fugiat voluptatibus amet
            blanditiis unde veritatis perferendis repellendus repellat. Ipsam hic
            iste itaque quibusdam!
          </div>
        </div>
        <div class="row">
          <div class="click2 col-12 col-md-4 col-sm-6" tabindex="1">
            <div class="tbn">
              <img
                src="https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg"
                alt=""
              />
              <h2><span>Name: </span>Person Five</h2>
              <p><span>Status: </span> Classmate</p>
            </div>
          </div>
          <div class="hidden2 col-12 col-md-8 col-sm-6 dis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia
            minima cupiditate consequatur asperiores amet deserunt eaque numquam
            et minus? Quo in ullam dignissimos quaerat, vel nobis aperiam odio
            quod.
          </div>
        </div>
        <div class="row">
          <div class="click3 col-12 col-md-4 col-sm-6" tabindex="1">
            <div class="tbn">
              <img
                src="https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg"
                alt=""
              />
              <h2><span>Name: </span>Person Five</h2>
              <p><span>Status: </span> Classmate</p>
            </div>
          </div>
          <div class="hidden3 col-12 col-md-8 col-sm-6 dis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque
            voluptates odit nesciunt repellendus magnam nemo dolore autem magni
            eos modi tenetur nostrum rem laboriosam, velit quam, eum laborum
            voluptatum.
          </div>
        </div>
        <div class="row">
          <div class="click4 col-12 col-md-4 col-sm-6" tabindex="1">
            <div class="tbn">
              <img
                src="https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg"
                alt=""
              />
              <h2><span>Name: </span>Person Five</h2>
              <p><span>Status: </span> Classmate</p>
            </div>
          </div>
          <div class="hidden4 col-12 col-md-8 col-sm-6 dis">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nulla provident repudiandae sunt aut suscipit quos dignissimos
            assumenda facilis voluptate soluta aliquam maiores, doloremque
            molestias pariatur autem placeat libero reprehenderit.
          </div>
        </div>
        <div class="row">
          <div class="click5 col-12 col-md-4 col-sm-6" tabindex="1">
            <div class="tbn">
              <img
                src="https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg"
                alt=""
              />
              <h2><span>Name: </span>Person Five</h2>
              <p><span>Status: </span> Classmate</p>
            </div>
          </div>
          <div class="hidden5 col-12 col-md-8 col-sm-6 dis">
            Lorem ipsum dol or sit amet consectetur adipisicing elit. Alias
            debitis excepturi eum, rerum tenetur blanditiis dicta neque
            dignissimos tempore culpa beatae voluptas porro facilis nam
            accusantium earum deleniti at tempora?
          </div>
        </div>
        <div class="row">
          <div class="click6 col-12 col-md-4 col-sm-6" tabindex="1">
            <div class="tbn">
              <img
                src="https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg"
                alt=""
              />
              <h2><span>Name: </span>Person Five</h2>
              <p><span>Status: </span> Classmate</p>
            </div>
          </div>
          <div class="hidden6 col-12 col-md-8 col-sm-6 dis">
            Lorem ipsum dol or sit amet consectetur adipisicing elit. Alias
            debitis excepturi eum, rerum tenetur blanditiis dicta neque
            dignissimos tempore culpa beatae voluptas porro facilis nam
            accusantium earum deleniti at tempora?
          </div>
        </div>
      </div>
    </div> -->
    <div>

      <!-- <div v-if="myTestimonials" class="bg-dark p-4"> -->
        <myTestimonialsComp
          id="" class="bg-dark p-4"
          v-for="myTestimonial of myTestimonials"
          :key="myTestimonial.id"
          :myTestimonial="myTestimonial"
        />
      <!-- </div> -->
      <!-- <div v-else>Processing...</div> -->
    </div>
  </div>
</template>
<script>
import myTestimonialsComp from "@/components/TesimonialComp.vue";
export default {
  computed: {
    myTestimonials() {
      return this.$store.state.myTestimonials;
    },
  },
  mounted() {
    this.$store.dispatch("getmyTestimonials");
  },
  components: { myTestimonialsComp },
};
</script>
<style scoped>
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */
/* template {
  background-color: #2e4f4f;
}
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
 margin-right: 100%; 
}
.container {
  height: 100vh;
}

.holder {
    background-color: black ;
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
  top: 3.35rem;
  height: 600px;
  width: 47.4rem;
  margin-left: 23.8rem;
  padding-top: 15rem;
  padding: 5rem;
}

@media screen and (max-width: 300px) {
  .dis {
    position: relative;
    margin-left: 0;
    height: auto;
    width: auto;
    top: auto;
  }
} */
</style>

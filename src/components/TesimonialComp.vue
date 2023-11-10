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
      <!-- <div class="hidden col-12 col-md-8 col-sm-12 dis">
        <h5>{{ myTestimonial.view }}</h5>
      </div>-->
    </div>
    <button @click="showModal" class="mobile-button">Show more</button>
    <div v-if="isModalVisible" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <div class="modal-info p-2">
          <img :src="myTestimonial.picture" :alt="myTestimonial.name" class="modal-img" />
          <h2>{{ myTestimonial.name }}</h2>
          <hr>
          <p class="text-start"> <span>Details</span> {{ myTestimonial.view }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myTestimonial"],
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>

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
}

.holder {
  background-color: transparent;
}

.row {
  background-color: transparent;
}

.click {
  background-color: #cbe4de;
  color: #0e8388;
  outline: none;
  cursor: pointer;
  height: 100px;
}

.hidden {
  display: none;
  background-color: #2e4f4f;
  color: #cbe4de;
}

.click:focus + .hidden {
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

.mobile-button {
  display: block;
  margin: 10px auto;
  background-color: #cbe4de;
  color: #2e4f4f;
  border-radius: 1rem;
  width: 10rem;
  height: 2rem;
  position: relative;
  left: 10%;
}

.mobile-button:hover {
  background-color: #cbe4de;
  color: #2e4f4f;
}

@media screen and (max-width: 700px) {
  .tbn {
    width: 100%;
  }

  .dis {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 1rem;
    padding: 0.04;
    font-size: 2rem;
    text-align: center;
    width: 100%;
    overflow: hidden;
  }
}

@media screen and (min-width: 501px) {
  .modal {
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }

  .modal-content {
    width: 300px; 
  }
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 1.5rem;
  }

  .holder {
    background-color: transparent;
  }

  .dis {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 0.3rem;
    padding: 0.02;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    overflow: hidden;
  }
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  justify-content: end;
  align-items: center;
  display: flex;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;
}

.modal-img {
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.close {
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>



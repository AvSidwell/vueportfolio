<template>
  <div>
    <div v-if="Educations" class="bg-dark row p-4">
      <EducationComp
        id=""
        v-for="Education of Educations"
        :key="Education.id"
        :Education="Education"
      />
    </div>
    <div v-else>Processing....</div>
    <!-- <div>
      <div class="col-12 col-sm-4 col-md-4">
        <h1>Education</h1>
        <div>
          <h1>High School</h1>
          <p>Belhar High School</p>
        </div>
        <div>
          <h1>Highest Grade Passed</h1>
          <p>Matric 2022</p>
        </div>
      </div>
      <div class="col-12 col-sm-8 col-md-8">
        <h1>Skills</h1>
      </div>
      <div class="col-12 col-sm-4 col-md-4"></div>
    </div> -->

  </div>
</template>
<script>
import EducationComp from "@/components/EducationComp.vue";
export default {
  computed: {
    Educations() {
      return this.$store.state.Educations;
    },
  },
  mounted() {
    this.$store.dispatch("getEducations");
  },
  components: { EducationComp },
};
</script>
<style>
h1 {
  color: #0e8388;
}
.row {
  height: 100vh;
}
</style>

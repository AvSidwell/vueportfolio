<template>
  <div>
    <div v-if="myProjects" class="bg-dark row p-4">
      <myProjectComp
        id="proj"
        v-for="myProject of myProjects"
        :key="myProject.id"
        :myProject="myProject"
      />
    </div>
    <div v-else>Processing...</div>
  </div>
</template>
<script>
import myProjectComp from "@/components/Proj-Comp.vue";
export default {
  computed: {
    myProjects() {
      return this.$store.state.myProjects;
    },
  },
  mounted() {
    this.$store.dispatch("getmyProjects");
  },


  
  components: { myProjectComp },
};
</script>
<style></style>

<template>
  <div v-if="mySkills" class="divi bg-dark row">
    <h1>My Skills</h1>
    <h5>Programming Languages</h5>
  <mySkillsComp  id="proj" v-for="mySkill of mySkills" :key="mySkill.id" :mySkill="mySkill"/>
  </div>
  <div v-else>Processing...</div>
</template>
<script>
import mySkillsComp from "@/components/SkillComp.vue"
export default {
  computed: {
    mySkills() {
      return this.$store.state.mySkills;
    },
  },
  mounted() {
    this.$store.dispatch("getmySkills");
  },

  components: { mySkillsComp },
};
</script>
<style>
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */
.divi {
margin: auto;
  width: 100vw;
}
h1 {
  color: #CBE4DE;

}

</style>

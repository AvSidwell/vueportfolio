<template>
    <div class="click col-12 col-md-6 col-sm-6 mx-auto">
      <h1>Education</h1>
      <div class="tbn">
        <h2><span>Name of School: </span>{{ Education.school }}</h2>
        <h2><span>Highest Grade Passed: </span>{{ Education.grade }}</h2>
        <p><span>Subjects: </span>{{ Education.subjects }}</p>
      </div>
    </div>

</template>
<script>
export default {
  props: ["Education"],
};
</script>
<style scoped>
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */
h2 {
  color: #CBE4DE ;
}

p {
  color: #CBE4DE;
}
span {
  font-size: small;
  text-decoration: underline;
  color: #0E8388;
}
</style>

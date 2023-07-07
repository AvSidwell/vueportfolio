<template>
  <router-link
    class="col-12 col-lg-3 col-md-3 col-sm-3 justify-content-center"
    :to="{ title: 'mySkill', params: { id: mySkill.id } }"
  >
    <div class="cardp">
      <img :src="mySkill.pic" alt="" />
      <p class="par">{{ mySkill.language }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["mySkill"],
};
</script>
<style scoped>
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */
.cardp {
  background-color: #0e8388;
}

.par {
  color: #2E4F4F;
}
img {
    background-color: #2E4F4F;
  height: 10rem;
  width: 100%;
}
</style>

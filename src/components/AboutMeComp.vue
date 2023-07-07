<template>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-6 p-2 m-0 text-start">
            <img :src="andMe.image" alt="">
        </div>
        <div class="col-12 col-sm-6 col-md-6 p-2 m-0 text-center">
            <p>{{ andMe.pText }}</p>
            <br>
            <br>
            <p>{{ andMe.pText2 }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ["andMe"]
}
</script>
<style>
    
</style>
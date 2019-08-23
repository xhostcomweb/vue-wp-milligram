<template>
  <div class="post-div">
   <h2 v-html="post.title" />
    <div v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More on Vue site
    </g-link>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="css" scoped>
     .post-div {
     margin-top:40px!important;
     }
</style>

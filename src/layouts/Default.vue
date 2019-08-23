<template>
<div class="layout">
<Header/> 
<main class="container">
 <slot/>
 </main>
<Footer/>
</div>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
img {
  max-width: 100%;
}
</style>


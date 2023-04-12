<template>
  <section class="main-layout">
    <AppHeader />
    <RouterView/>
    <AppFooter />

  </section>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'

export default {
  
  created() {

  },
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
<template>
  <div class="container is-fluid">

    <v-nav-bar />

    <div class="container">
      <router-view />
    </div>

    <v-footer-bar />

  </div>
</template>

<script>
import VNavBar from './components/vnavbar.vue'
import VFooterBar from './components/vfooterbar.vue'

export default {
  name: 'App',
  components: {
    'v-nav-bar': VNavBar,
    'v-footer-bar': VFooterBar
  }
}
</script>


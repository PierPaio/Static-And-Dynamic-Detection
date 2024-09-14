<template>
  <div class="wrapper">
    <AppHeader />
    <div class="content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader.vue';
import AppFooter from './layout/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>


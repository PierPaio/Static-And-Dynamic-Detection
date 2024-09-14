<template>
  <div class="wrapper">
    <TheHeader />
    <div class="content">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
import TheFooter from './layout/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>


<template>
  <div class="header">
    <TheSidebar />
    <div class="menu-icon">
      <router-link to="/" class="home-link">
        <i class="bi-house-door-fill" style="text-decoration: none; color: white; padding-right: 10px;"></i>
      </router-link>
    </div>
  </div>
</template>
  
<script>
import TheSidebar from './TheSidebar.vue';
  
export default {
  name: 'TheHeader',
  components: {
    TheSidebar,
  },
};
</script>
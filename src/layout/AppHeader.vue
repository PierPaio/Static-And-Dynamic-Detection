<template>
  <div class="header">
    <AppSidebar />
    <div class="menu-icon">
      <router-link to="/" class="home-link">
        <i class="bi-house-door-fill" style="text-decoration: none; color: white; padding-right: 10px;"></i>
      </router-link>
    </div>
  </div>
</template>
  
<script>
import AppSidebar from './AppSidebar.vue';
  
export default {
  name: 'AppHeader',
  components: {
    AppSidebar,
  },
};
</script>
<template>
  <div>
    <div class="header">
      <div class="menu-icon" @click="toggleSidebar">
        <i class="bi bi-list menu-icon"></i>
      </div>
      <h1 class="title">Static And Dynamic Detection</h1>
    </div>
  
    <nav :class="['sidebar', { open: isOpen }]">
      <ul>
        <li><h3 class="title-sidebar">Static Detection</h3></li>
        <li><router-link to="/upload" class="router-link">Upload File</router-link></li>
        <li><h3 class="title-sidebar">Dynamic Detection</h3></li>
        <li><router-link to="/path" class="router-link">Insert Path File</router-link></li>
      </ul>
    </nav>
  
    <div v-if="isOpen" class="overlay" @click="toggleSidebar"></div>
  </div>
  </template>
  
<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

  
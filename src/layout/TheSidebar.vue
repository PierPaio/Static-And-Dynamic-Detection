<template>
  <div>
    <div class="header">
      <div class="menu-icon" @click="toggleSidebar">
        <i class="bx bx-menu" style="font-size: 40px;"></i>
      </div>
      <h1 class="title">Static And Dynamic Detection</h1>
    </div>
  
    <nav :class="['sidebar', { open: isOpen }]">
      <ul>
        <li><h3 class="title-sidebar">Static Detection</h3></li>
        <li><router-link to="/upload" class="router-link"><i class='bx bxs-file-import' style='color:white; font-size: 40px;'></i></router-link></li>
        <li><h3 class="title-sidebar">Dynamic Detection</h3></li>
        <li><router-link to="/path" class="router-link"><i class='bx bx-folder-open' style='color:white; font-size: 40px;'></i>
        </router-link></li>
      </ul>
    </nav>
  
    <div v-if="isOpen" class="overlay" @click="toggleSidebar"></div>
  </div>
  </template>
  
<script>
import 'boxicons';
export default {
  name: 'TheSidebar',
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
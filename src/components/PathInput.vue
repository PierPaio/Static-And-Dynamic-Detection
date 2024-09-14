<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" style="margin-top: 50px;">
      <input
        v-model="path"
        placeholder="Enter CSV file path"
        style="width: 300px; margin-bottom: 40px;"
      />
      <br>
      <button type="submit" class="btn">Load CSV</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      path: '',
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.path) return;

      try {
        // Manda il percorso del CSV al server
        const response = await axios.post('http://localhost:3001/set-csv-path', { path: this.path });
        if (response.data.message) {
          console.log(response.data.message);
          
          // Reindirizza alla pagina /csv-viewer
          this.$router.push('/csv-viewer');
        }
      } catch (error) {
        console.error('Error setting CSV path:', error);
      }
    },
  },
};
</script>

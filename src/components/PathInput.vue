<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" style="margin-top: 50px;">
      <input
        v-model="path"
        placeholder="Enter CSV file path"
        style="width: 300px; margin-bottom: 10px;"
      />
      <br>
      <button type="submit" class="btn">Load CSV</button>
    </form>
    
    <!-- Mostra il messaggio di errore se presente -->
    <p v-if="errorMessage" style="color: red; margin-top: 20px;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      path: '',
      errorMessage: '', // Variabile per memorizzare il messaggio di errore
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.path) {
        this.errorMessage = 'Please enter a valid CSV path.'; // Mostra un messaggio di errore se il percorso è vuoto
        return;
      }

      try {
        // Manda il percorso del CSV al server
        const response = await axios.post('http://localhost:3001/set-csv-path', { path: this.path });
        if (response.data.message) {
          console.log(response.data.message);
          this.errorMessage = ''; // Resetta il messaggio di errore se la richiesta ha successo
          
          // Reindirizza alla pagina /csv-viewer
          this.$router.push('/csv-viewer');
        }
      } catch (error) {
        // Imposta il messaggio di errore in caso di errore
        this.errorMessage = 'Error setting CSV path. Please check the path and try again.';
        console.error('Error setting CSV path:', error);
      }
    },
  },
};
</script>

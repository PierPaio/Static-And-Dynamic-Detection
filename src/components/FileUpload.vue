<template>
  <div class="container" id="data">
    <!-- Se non ci sono dati CSV, mostra l'area di caricamento -->
    <div v-if="csvData.length === 0">
      <input
        type="file"
        accept=".csv"
        @change="handleFileChange"
        style="display: none;"
        ref="fileInput"
      />
      <label
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
        :style="dropAreaStyle"
        @click="triggerFileInput"
      >
        {{ file ? file.name : 'Drag & Drop your CSV file here or click to select' }}
      </label>
      <br>
      <button
        @click="handleUpload"
        class="btn"
        style="margin: 20px 0;"
      >
        Upload CSV
      </button>
    </div>
  
    <!-- Se ci sono dati CSV, mostra i dati e il grafico -->
    <div v-else>
      <h2>CSV Data Viewer</h2>
      <br />
      <a href="#plot" class="link-to">Go to Plot</a>
      <GeneratedHtml :csvData="csvData" />
      <div id="plot">
        <CsvPlotter :data="csvData" />
      </div>
      <br />
      <a href="#data" class="link-to">Go to Data</a>
    </div>
  </div>
</template>
  
<script> 
import Papa from 'papaparse';
import CsvPlotter from './CsvPlotter.vue';
import GeneratedHtml from './GeneratedHtml.vue';
  
export default {
  name: 'FileUpload',
  components: {
    CsvPlotter,
    GeneratedHtml
  },
  data() {
    return {
      file: null,
      csvData: [],
      dragOver: false
    };
  },
  computed: {
    dropAreaStyle() {
      return {
        border: '2px dashed #ccc',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: this.dragOver ? '#f0f0f0' : '#fff',
        cursor: 'pointer',
        color: 'black',
        borderRadius: '6px',
        marginBottom: '20px',
        transition: 'background-color 0.3s, color 0.3s'
      };
    }
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    handleUpload() {
      if (this.file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target.result;
          Papa.parse(text, {
            header: true,
            complete: (results) => {
              this.csvData = results.data;
            }
          });
        };
        reader.readAsText(this.file);
      } else {
        alert("Please select a file first.");
      }
    },
    handleDragOver(event) {
      event.preventDefault();
      this.dragOver = true;
    },
    handleDragLeave() {
      this.dragOver = false;
    },
    handleDrop(event) {
      event.preventDefault();
      this.dragOver = false;
      this.file = event.dataTransfer.files[0];
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    }
  }
};
</script>
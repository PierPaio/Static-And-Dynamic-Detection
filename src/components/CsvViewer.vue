<template>
  <div class="container" id="data">
    <div v-if="data.length > 0">
      <h2>CSV Data Viewer</h2>
      <br />
      <a href="#plot" class="link-to">Go to Plot</a>
      <GeneratedHtml :csvData="data" />
      <div ref="plotContainer" style="width: 100%; height: 400px;" id="plot" ></div>
      <br />
      <a href="#data" class="link-to">Go to Data</a>
    </div>
    <div v-else>
      <p>No data available.</p>
    </div>
  </div>
</template>
  
<script>
import Plotly from 'plotly.js-dist';
import axios from 'axios';
import GeneratedHtml from './GeneratedHtml.vue';
  
export default {
  components: {
    GeneratedHtml,
  },
  data() {
    return {
      data: [],
      headers: [],
      intervalId: null, // memorizzo l'ID dell'intervallo per poterlo pulire
    };
  },
  mounted() {
    this.fetchData(); // Inizialmente richiamo il caricamento dei dati
      // Imposto l'intervallo per aggiornare i dati ogni 5 secondi
      this.intervalId = setInterval(() => {
        this.fetchData();
      }, 5000);
  },
  beforeUnmount() {
    // Pulisci l'intervallo quando il componente viene distrutto
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/data'); // richiesta get a server
        this.data = response.data;
        if (this.data.length > 0) {
          this.headers = Object.keys(this.data[0]);
          this.plotData();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    plotData() { // genera il grafico
      if (!this.data.length) return;
      
      // estrae i valori
      const headers = this.headers;
      const xValues = this.data.map(row => row[headers[0]]);
      const yValues = this.data.map(row => row[headers[1]]);
      const anomalyValues = this.data.map(row => row[headers[2]]);
  
      const normalPoints = {
        x: xValues.filter((_, i) => anomalyValues[i] === '0'),
        y: yValues.filter((_, i) => anomalyValues[i] === '0'),
        mode: 'markers',
        marker: { color: 'green' },
        name: 'Normal'
      };
  
      const anomalyPoints = {
        x: xValues.filter((_, i) => anomalyValues[i] === '1'),
        y: yValues.filter((_, i) => anomalyValues[i] === '1'),
        mode: 'markers',
        marker: { color: 'red' },
        name: 'Anomaly'
      };
  
      const layout = {
        height: 400,
        autosize: true,
        title: 'CSV Data Plot',
        xaxis: { title: headers[0] },
        yaxis: { title: headers[1] }
      };
      
      this.$nextTick(() => {
        // Verifica se l'elemento DOM esiste e non è null per evitare errori
        if (this.$refs.plotContainer) {
          // genera grafico all'interno di elemento plotContainer
          Plotly.newPlot(this.$refs.plotContainer, [normalPoints, anomalyPoints], layout, { responsive: true });
        } else {
          console.error('Element with ref "plotContainer" is not found.');
        }
      });
    },
  },
};
</script>
  
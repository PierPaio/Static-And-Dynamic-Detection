<template>
  <div style="width: 100%;">
    <div ref="plotContainer" style="width: 100%; height: 400px;"></div> 
  </div>
</template>
  
<script>
import Plotly from 'plotly.js-dist';
  
export default {
  name: 'CsvPlotter',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(newData) {
        this.plotData(newData); // chiamato ogni volta che data cambia
      }
    }
  },
  methods: {
    plotData(data) {
      if (!data || data.length === 0) {
        return;
      }
  
      const headers = Object.keys(data[0]); // intestazioni
      const xValues = data.map(row => row[headers[0]]);
      const yValues = data.map(row => row[headers[1]]);
      const anomalyValues = data.map(row => row[headers[2]]);
  
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
    }
  }
};
</script>
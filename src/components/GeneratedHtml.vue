<template>
    <div class="mt-4">
      <h3>Table with data:</h3>
      <div v-html="tableHtml"></div>
    </div>
</template>
  
<script>
import { ref, watch, onMounted } from 'vue';
  
export default {
  name: 'GeneratedHtml',
  props: { // proprietà che componente riceve
    csvData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) { // definisco logica principale del componente con Composition API
    const tableHtml = ref(''); // tableHtml definito come una variabile reattiva
  
    const generateTableHtml = () => {
      if (props.csvData.length > 0) {
        // Usa i dati CSV per generare l'HTML della tabella
        const headers = Object.keys(props.csvData[0]);
        const rows = props.csvData;
  
        // Crea l'HTML per l'intestazione della tabella
        const tableHeader = `<tr>${headers.map(header =>
          `<th>${header}</th>`
        ).join('')}</tr>`;
  
        // Crea l'HTML per il corpo della tabella
        const tableBody = rows.map(row => `
          <tr>${headers.map(header =>
            `<td>${row[header] || ''}</td>`
          ).join('')}</tr>`
        ).join('');
  
        // Crea l'HTML completo della tabella
        tableHtml.value = `
          <table class="table table-striped">
            <thead>${tableHeader}</thead>
            <tbody>${tableBody}</tbody>
          </table>
        `;
      }
    };
  
    // Eseguo la generazione dell'HTML ogni volta che i dati cambiano
    watch(() => props.csvData, generateTableHtml, { immediate: true });
  
    // onMounted per generare l'HTML all'inizio se ho già dati disponibili
    onMounted(generateTableHtml);
  
    return {
      tableHtml
    };
  }
};
</script>  
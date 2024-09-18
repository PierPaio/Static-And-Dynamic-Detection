<template>
  <div class="container">
    <h1 class="text-center">Welcome to the CSV Data Viewer</h1>
    <p style="margin-top: 20px; font-size: 23px; align-items: center;" >
      Use the sidebar to navigate between the different sections:
    </p>
      <div class="menu-container">
        <ul class="menu-list">
          <li class="menu-item">
            <i class='bx bxs-file-import' style='color:black; font-size: 40px;'></i> <i class='bx bx-right-arrow-alt' style="font-size: 35px;"></i> Upload your CSV files.
          </li>
          <li class="menu-item">
            <i class='bx bx-folder-open' style='color:black; font-size: 40px;'></i> <i class='bx bx-right-arrow-alt' style="font-size: 35px;"></i> Enter the path to upload a CSV file directly from your system.
          </li>
        </ul>
      </div>
    <p style="margin-top: 30px; font-size: 20px;">
      Ready to start? Upload your first CSV file using the navigation menu!
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheHome',
};
</script>
<style>
.menu-container {
  display: flex;
  justify-content: center; /* Centra orizzontalmente */
  align-items: center; /* Centra verticalmente */
}
.menu-list {
  list-style-type: none; /* Nasconde i punti elenco */
  padding: 0; /* Rimuove padding predefinito */
  margin: 0; /* Rimuove margini predefiniti */
}

.menu-item {
  display: flex; /* Allinea gli elementi in una riga */
  align-items: center; /* Centra gli elementi verticalmente */
  gap: 10px; /* Spaziatura tra gli elementi */
  padding: 10px; /* Aggiunge padding all'elemento */
}

.menu-text {
  flex: 1; /* Occupa tutto lo spazio rimanente */
}
</style>
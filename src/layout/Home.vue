<template>
  <div class="container">
    <h1 class="text-center">Welcome to the CSV Data Viewer</h1>
    <p style="margin-top: 30px; font-size: 18px;">
      This application allows you to load and view data from CSV files quickly and easily. <br>
      You can upload your files, view the data in tabular format, and generate graphic graphics for quick analysis.
    </p>
    <p style="margin-top: 20px; font-size: 18px;">
      Use the sidebar to navigate between the different sections:
      <ul>
        <li><strong>Upload CSV</strong>: Upload your CSV files.</li>
        <li><strong>Path Input</strong>: Enter the path to upload a CSV file directly from your system.</li>
      </ul>
    </p>
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

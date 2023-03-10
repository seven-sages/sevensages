<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const languages = [
  {
    language: 'Arabic',
    manuscripts: '15'
  },
  {
    language: 'Armenian',
    manuscripts: '13'
  },
  {
    language: 'Bulgarian',
    manuscripts: '4'
  },
  {
    language: 'Byzantine',
    manuscripts: '7'
  },
  {
    language: 'Castilian',
    manuscripts: '13'
  },
  {
    language: 'Catalan',
    manuscripts: '22'
  },
  {
    language: 'Czech',
    manuscripts: '4'
  },
  {
    language: 'Danish',
    manuscripts: '9'
  },
  {
    language: 'Dutch',
    manuscripts: '6'
  },
  {
    language: 'English',
    manuscripts: '11'
  },
  {
    language: 'French',
    manuscripts: '22'
  },
  {
    language: 'German (High and Low German) ',
    manuscripts: '1'
  },
  {
    language: 'Hebrew',
    manuscripts: '1'
  },
  {
    language: 'Hungarian',
    manuscripts: '1'
  },
  {
    language: 'Icelandic',
    manuscripts: '1'
  },
  {
    language: 'Italian',
    manuscripts: '1'
  },
  {
    language: 'Latin',
    manuscripts: '1'
  },
  {
    language: 'Lithuanian',
    manuscripts: '1'
  },
  {
    language: 'Icelandic',
    manuscripts: '1'
  },
  {
    language: 'Norwegian',
    manuscripts: '1'
  },
  {
    language: 'Persian',
    manuscripts: '1'
  },
  {
    language: 'Polish',
    manuscripts: '1'
  },
  {
    language: 'Rumanian',
    manuscripts: '1'
  },
  {
    language: 'Russian',
    manuscripts: '1'
  },
  {
    language: 'Scots',
    manuscripts: '1'
  },
  {
    language: 'Serbian',
    manuscripts: '1'
  },
  {
    language: 'Swedish',
    manuscripts: '1'
  },
  {
    language: 'Syrian',
    manuscripts: '1'
  },
  {
    language: 'Turkish',
    manuscripts: '1'
  },
  {
    language: 'Welsh',
    manuscripts: '1'
  },
  {
    language: 'Yiddish',
    manuscripts: '1'
  }
]
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
        Database of The Seven Sages of Rome
      </h1>
      <DataTable stripedRows :value="languages" paginator :rows="10" :rows-per-page-options="[10, 20, 30]" table-style="min-width: 50rem">
        <Column field="language" header="Language" sortable style="width: 50%" />
        <Column field="manuscripts" header="Manuscripts" sortable style="width: 50%" />
      </DataTable>
    </div>
  </div>
</template>

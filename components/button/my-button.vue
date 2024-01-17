<script setup lang="ts">
const label="test";
const { t } = useI18n();

</script>

<template>
  <button>
    {{t(label) }}
  </button>
</template>
<i18n lang="json">
{
  "sv": {
    "test": "Testa svenska"
  },
  "en": {
    "test": "Testing English"
  }
}
</i18n>

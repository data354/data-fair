<template>
  <v-container
    fluid
    class="pa-0"
  >
    <application-import />
  </v-container>
</template>

<i18n lang="yaml">
fr:
  apps: Visualisations
  breadcrumb: Configurer une visualisation
en:
  apps: Visualizations
  breadcrumb: Configure a visualization
</i18n>

<script>

export default {
  async fetch ({ store }) {
    await store.dispatch('fetchVocabulary')
  },
  created () {
    this.$store.dispatch('breadcrumbs', [{ text: this.$t('apps'), to: '/applications' }, { text: this.$t('breadcrumb') }])
  }
}
</script>

<style lang="css" scoped>
</style>

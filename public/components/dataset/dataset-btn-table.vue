<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    max-width="1200"
  >
    <template #activator="{ on }">
      <v-icon
        :title="$t('preview')"
        :disabled="!dataset.finalizedAt"
        v-on="on"
      >
        mdi-table
      </v-icon>
    </template>
    <v-card v-if="dialog">
      <v-toolbar
        dense
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          {{ dataset.title }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click.native="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pa-0">
        <dataset-table v-if="$store.state.dataset.dataset" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<i18n lang="yaml">
fr:
  preview: Prévisualiser la donnée
en:
  preview: Preview the data
</i18n>

<script>
export default {
  props: ['dataset'],
  data: () => ({
    dialog: false
  }),
  watch: {
    dialog () {
      if (this.dialog) this.$store.dispatch('dataset/setId', { datasetId: this.dataset.id })
    }
  }
}
</script>

<style lang="css" scoped>
</style>

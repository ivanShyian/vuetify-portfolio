<template>
  <v-row>
    <v-col>
      <v-card
        class="label-of-page"
        elevation="0"
      >
        <v-card-title class="justify-end text--disabled font-weight-light text-button px-2 py-0 my-font"
                      v-text="$t(page)"
        ></v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  computed: {
    page() {
      return this.$route.name ? (this.$route.name + '.page').toLowerCase() : 'loading'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

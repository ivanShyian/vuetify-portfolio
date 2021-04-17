<template>
  <v-footer
    dark
    padless
    color="#29B6F6">
    <v-container>
      <v-card
        flat
        tile
        color="#29B6F6"
        class="white--text text-center">
        <v-card-text
          class="pa-0"
          v-if="social.length"
        >
          <v-btn
            v-for="item in social"
            :key="item.id"
            class="mx-4 my-0 white--text"
            icon
            link
            target="_blank"
            :href="item.link"
          >
            <v-icon size="18px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider class="py-1"></v-divider>
        <v-card-text class="white--text py-0">
          {{ new Date().getFullYear() }} — <strong>IS</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  computed: {
    social() {
      return this.$store.getters['statement/socialFooter']
    }
  }
}
</script>

<style scoped>

</style>

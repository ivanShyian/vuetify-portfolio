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
        <v-card-text class="py-0">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 my-0 white--text"
            icon
          >
            <v-icon size="18px">
              {{ icon }}
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
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-linkedin',
      'fab fa-telegram',
      'fab fa-instagram'
    ]
  })
}
</script>

<style scoped>

</style>

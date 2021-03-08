<template>
  <v-row justify="center">
    <v-col cols="10" sm="8">
      <v-card elevation="4"
              outlined
              shaped>
        <v-container>
          <v-row>
            <v-col
              :cols="breakpoint ? 6 : 6" ref="avatar-col"
              lg="5">
              <v-avatar
                color="teal"
                :size="size">
                <img src="../assets/author_photo.jpg" alt="Ivan">
              </v-avatar>
            </v-col>
            <p class="text--disabled text-caption text-label" v-text="'<!--About-->'"></p>
            <v-col
              :cols="breakpoint ? 6 : 12"
              :class="breakpoint ? 'pt-10' : 'pt-2'">
              <h3 class="pb-2">Ivan Shyian</h3>
              <span class="pb-2">23 year-olds</span><br>
              <span>Frontend developer</span>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'About',
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 160
        case 'sm':
          return 170
        case 'md':
          return 270
        case 'lg':
          return 270
      }
    },
    breakpoint() {
      return this.$vuetify.breakpoint.width >= 460
    }
  },
  components: {}
}
</script>
<style lang="scss">
.text-label {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>

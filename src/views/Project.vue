<template>
  <v-row justify="center" v-if="this.project">
    <v-col cols="10" :md="imageEnough ? 10 : 7">
      <v-card
        min-height="600"
        elevation="3"
        outlined
        class="d-flex flex-column">
        <v-row v-if="project.img.length">
          <v-col v-if="imageEnough"
                 cols="12"
                 md="8"
                 class="pb-0 pb-md-3 d-md-flex"
          >
            <v-img
              class="ma-2 mr-md-1"
              contain
              width="auto"
              :src="require(`@/assets/projects/${project.img[0]}`)"
            ></v-img>
          </v-col>
          <v-col v-if="imageEnough"
                 cols="12"
                 md="4"
                 class="d-flex flex-md-column py-0 py-md-12 py-lg-6">
            <v-img
              class="ma-2 my-1 my-md-2 ml-md-1 mb-md-0"
              :width="width"
              contain
              :src="require(`@/assets/projects/${project.img[1]}`)"
            ></v-img>
            <v-img
              :width="width"
              class="ma-2 my-1 my-md-2 ml-md-1 mb-md-0"
              contain
              :src="require(`@/assets/projects/${project.img[2]}`)"
            ></v-img>
          </v-col>
          <v-col v-else
                 cols="12"
                 md="12"
                 class="pb-0 pb-md-3 d-md-flex"
          >
            <v-img
              class="ma-2 mr-md-2"
              contain
              :width="widthOne"
              :src="require(`@/assets/projects/${project.img[0]}`)"
            ></v-img>
          </v-col>
        </v-row>
        <v-divider class="mt-3"></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text-subtitle-1 text-sm-h5 font-weight-medium"
            >{{ $t(`projects.card[${findExactIndex}].title`) }}
            </v-card-title>
            <v-card-subtitle>{{ $t(`projects.card[${findExactIndex}].smallDescription`) }}</v-card-subtitle>
            <v-card-text>
              {{ $t(`projects.card[${findExactIndex}].text`) }}
            </v-card-text>
            <v-card-actions class="justify-end mt-auto">
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 100
        case 'sm':
          return 150
        case 'md':
          return 'auto'
        default:
          return 'auto'
      }
    },
    widthOne() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'auto'
        case 'md':
          return 0
        case 'lg':
          return 0
        default:
          return 0
      }
    },
    project() {
      return this.$store.getters['statement/exactProject'](this.$route.params.link)
    },
    findExactIndex() {
      return this.$store.getters['statement/projects'].findIndex(el => el.link === this.$route.params.link)
    },
    imageEnough() {
      return this.project ? Object.keys(this.project.img).length > 1 : false
    }
  }
}
</script>

<style scoped>

</style>

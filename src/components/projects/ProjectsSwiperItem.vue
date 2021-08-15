<template>
  <v-card
    height="370"
    elevation="2"
    outlined
    class="d-flex flex-column pt-2 relative-card"
  >
    <v-img
      max-height="150"
      contain
      :src="project.img[0]"
    ></v-img>
    <v-divider class="mt-3"></v-divider>
    <v-card-title class="text-subtitle-1 text-sm-h6 font-weight-regular"
    >{{ $t(`projects.card[${customIndex}].title`) }}</v-card-title>
    <v-card-text style="width: 93%">{{$t(`projects.card[${customIndex}].smallDescription`)}}</v-card-text>
    <v-card-actions class="absolute-card-button">
      <v-btn color="#29B6F6"
             dark
             :to="$i18nRoute({ name: 'Project', params: { link: project.link } })"
      >{{ $t(`openButton`) }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    // @TODO Refactor this
    customIndex() {
      switch (this.index) {
        case 0:
          return 3
        case 1:
          return 2
        case 2:
          return 1
        default:
          return 0
      }
    }
  }
}
</script>

<style scoped>

</style>

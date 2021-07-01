<template>
  <v-row justify="center" v-if="this.project">
    <v-col cols="10" :md="imageEnough ? 10 : 7">
      <v-card
        elevation="3"
        outlined
        class="d-flex flex-column">
        <template v-if="project.img.length">
          <v-row
            v-if="imageEnough"
          >
            <v-col
              cols="12"
              class="d-md-flex"
              v-viewer="viewerSettings">
              <v-col
                cols="12"
                md="8"
                class="pa-1 fa-border d-flex align-center"
              >
                <div style="width: 100%">
                  <img style="width: 100%;" :src="imageSource[0]" alt="">
                </div>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="pa-1 fa-border d-flex flex-md-column justify-md-center"
              >
                <div
                  class="two-images-block"
                  v-for="(img, id) in imageSource"
                  :key="id">
                  <div v-if="id !== 0"
                       style="width: 100%;">
                    <img style="width: 100%" :src="img" alt="">
                  </div>
                </div>
              </v-col>

            </v-col>
          </v-row>
          <v-row v-else>
            <v-col
              cols="12"
              class="py-5 px-4 d-flex align-center justify-center"
              v-viewer="viewerSettings">
              <img class="rounded-sm" style="width: 95%;" :src="imageSource[0]" alt="">
            </v-col>
          </v-row>
        </template>
        <v-divider class="mt-1"></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text-subtitle-1 text-sm-h5 font-weight-medium"
            >{{ $t(`projects.card[${findExactIndex}].title`) }}
            </v-card-title>
            <v-card-subtitle>{{ $t(`projects.card[${findExactIndex}].smallDescription`) }}</v-card-subtitle>
            <v-card-text>
              <p>{{ $t(`projects.card[${findExactIndex}].text`) }}
                <a
                  v-if="project.app_link"
                  :href="project.app_link"
                  target="_blank">{{ project.app_link }}
                </a>
              </p>
              <v-divider></v-divider>
              <ul class="list-of-used-tech">
                <li>{{ $t('projects.usedTech') }}:</li>
                <li
                  v-for="(val, idx) in project.usedTech"
                  :key="idx">{{ val }}</li>
              </ul>
            </v-card-text>
            <v-card-actions class="justify-end mt-auto"></v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import 'viewerjs/dist/viewer.css'
import VueViewer, { directive as viewer } from 'v-viewer'

Vue.use(VueViewer)
export default {
  directives: {
    viewer: viewer({
      debug: true
    })
  },
  data() {
    return {
      viewerSettings: {
        button: true,
        navbar: false,
        title: false,
        toolbar: true,
        tooltip: false,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        transition: true,
        fullscreen: false,
        keyboard: true
      }
    }
  },
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
      return this.project ? Object.keys(this.imageSource).length > 1 : false
    },
    imageSource() {
      return this.project.img
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.two-images-block:nth-child(even) {
  margin-right: .25rem;
  @media screen and (min-width: 960px) {
    margin: 0;
  }
}
.list-of-used-tech {
  display: flex;
  margin: 0;
  padding: .75rem 0 0 0;
  flex-wrap: wrap;
  li:first-child {
    flex: 0 1 100%;
    font-size: 1rem;
    font-weight: 600;
    list-style: none;
    margin-bottom: .5rem;
  }
  li:not(:first-child) {
    flex: 0 0 45%;
    margin-left: 1rem;
  }
}
</style>

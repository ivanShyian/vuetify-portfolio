<template>
  <v-sheet
    class="full-height d-flex flex-column"
    color="white"
  >
    <app-page-title/>
    <v-row>
      <v-col v-for="(proj, i) in projects"
             :key="proj.id"
             class="pt-0"
             cols="12" sm="6" md="4"
      >
        <v-card
          v-if="projects.length"
          height="370"
          elevation="2"
          outlined
          class="d-flex flex-column pt-2 relative-card"
        >
          <v-img
            max-height="150"
            contain
            :src="proj.img[0]"
          ></v-img>
          <v-divider class="mt-3"></v-divider>
          <v-card-title class="text-subtitle-1 text-sm-h6 font-weight-regular"
          >{{ $t(`projects.card[${i}].title`) }}</v-card-title>
          <v-card-text>{{  $t(`projects.card[${i}].smallDescription`) }}</v-card-text>
          <v-card-actions class="absolute-card-button">
            <v-btn color="#29B6F6"
                   dark
                   :to="$i18nRoute({ name: 'Project', params: { link: proj.link } })"
            >{{ $t(`openButton`) }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          elevation="1"
          outlined
        >
          <v-card-title class="justify-center text-md-subtitle-1 font-weight-regular py-1 py-xl-2">{{ $t('projects.additionalLabel') }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text
          >{{ $t('projects.additional') }}
            <v-btn
              text
              link
              small
              class="py-0 text-caption"
              target="_blank"
              href="https://github.com/ivanShyian">{{ $t('link') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import AppPageTitle from '../components/ui/AppPageTitle'
export default {
  components: { AppPageTitle },
  computed: {
    projects() {
      return this.$store.getters['statement/projects']
    }
  }
}
</script>

<style lang="scss" scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}
.relative-card {
  position: relative;
}
.absolute-card-button {
  position: absolute;
  bottom: 0;
  right: 0;
}

</style>

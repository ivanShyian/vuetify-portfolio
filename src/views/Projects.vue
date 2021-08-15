<template>
  <v-sheet
    class="full-height d-flex flex-column"
    color="white"
  >
    <app-page-title/>
    <template v-if="projects.length">
      <projects-swiper
        :projects="projects"
      />
    </template>
    <v-row>
      <v-col>
        <v-card
          elevation="1"
          outlined
        >
          <v-card-title
            class="justify-center text-body-1 text-md-subtitle-1 font-weight-regular py-1 py-xl-2"
          >{{ $t('projects.additionalLabel') }}</v-card-title>
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
import AppPageTitle from '@/components/ui/AppPageTitle'
import ProjectsSwiper from '@/components/projects/ProjectsSwiper'
export default {
  components: { ProjectsSwiper, AppPageTitle },
  computed: {
    initialProjects() {
      return this.$store.getters['statement/projects']
    },
    projects() {
      return this.initialProjects && this.initialProjects.slice().reverse()
    }
  }
}
</script>

<style lang="scss">
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

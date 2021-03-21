<template>
  <v-sheet
    color="white"
  >
    <v-row>
      <v-col>
        <v-card
          elevation="0"
        >
          <v-card-title class="justify-end text--disabled text-button px-2 py-0 my-font"
                        v-text="$t('expirience.page')"
          ></v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(proj, i) in projects"
             :key="proj.id"
             cols="12" sm="6" md="4"
      >
        <v-card
          v-if="projects.length"
          min-height="400"
          elevation="2"
          outlined
          class="d-flex flex-column pt-2"
        >
          <v-img
            max-height="150"
            contain
            :src="require(`@/assets/projects/${proj.img.first}`)"
          ></v-img>
          <v-divider class="mt-3"></v-divider>
          <v-card-title class="text-subtitle-1 text-sm-h6 font-weight-regular"
          >{{ $t(`expirience.card[${i}].title`) }}</v-card-title>
          <v-card-text>{{ $t(`expirience.card[${i}].text`) }}</v-card-text>
          <v-card-actions class="justify-end mt-auto">
            <v-btn color="#29B6F6"
                   dark
                   :to="$i18nRoute({ name: 'Project', params: { id: proj.id } })"
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
          <v-card-title class="justify-center">{{ $t('expirience.additionalLabel') }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text
          >{{ $t('expirience.additional') }}
            <v-btn
              text
              link
              small
              class="py-0 text-caption"
              target="_blank"
              :href="additional.link">{{ $t('link') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      additional: {
        label: 'Additional info',
        text: 'Of course, these are not all of my projects. There were a couple of sites that' +
          ' I could show you but I think you are not interested in pure html and css. At this point in time, all forces are thrown into the development with Vue2, Vue3 and also NuxtJS.' +
          ' Anyway you can check my github for all repositories that i have: ',
        link: 'https://github.com/ivanShyian'
      }
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects
    }
  }
}
</script>

<style scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}

</style>

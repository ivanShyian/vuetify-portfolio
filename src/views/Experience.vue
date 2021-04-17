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
                        v-text="$t('experience.page')"
          ></v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(proj, i) in projects"
             :key="proj.id"
             class="pt-0"
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
            :src="require(`@/assets/projects/${proj.img[0]}`)"
          ></v-img>
          <v-divider class="mt-3"></v-divider>
          <v-card-title class="text-subtitle-1 text-sm-h6 font-weight-regular"
          >{{ $t(`experience.card[${i}].title`) }}</v-card-title>
          <v-card-text>{{ $t(`experience.card[${i}].smallDescription`) }}</v-card-text>
          <v-card-actions class="justify-end mt-auto">
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
          <v-card-title class="justify-center">{{ $t('experience.additionalLabel') }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text
          >{{ $t('experience.additional') }}
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
export default {
  computed: {
    projects() {
      return this.$store.getters['statement/projects']
    }
  }
}
</script>

<style scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}

</style>

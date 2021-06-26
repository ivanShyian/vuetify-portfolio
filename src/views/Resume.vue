<template>
  <div>
    <app-page-title/>
    <v-row justify="center" class="mt-0">
      <v-col cols="12" sm="6" class="py-0 py-sm-4">
        <v-card elevation="4"
                class="py-4 my-0"
                outlined
                height="97%"
        >
          <v-container>
            <v-row class="pb-2 pb-sm-4">
              <v-col
                :cols="breakpoint ? 6 : 12"
                lg="5"
                class="text-center text-sm-left"
              >
                <v-avatar
                  color="teal"
                  :size="size"
                >
                  <img src="../assets/author_photo.jpg" alt="Ivan">
                </v-avatar>
              </v-col>
              <v-col
                :cols="breakpoint ? 6 : 12"
                :class="breakpoint ? 'pt-6' : 'pt-2'"
              >
                <div class="pb-sm-5 pb-2">
                  <h3 class="pb-2 font-weight-bold text-uppercase text-h6 text-md-h5"
                  >{{ $t('resume.name') }}</h3>
                  <span class="pb-2">{{ $t('resume.age') }}</span><br>
                  <span>{{ $t('resume.position') }}</span><br>
                  <span>{{ $t('resume.place') }}</span>
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-0">
              <v-col>
                <p
                  :style="currentLangIsNotEnglish ? 'fontSize: 15px' : ''"
                >{{ $t('resume.content') }}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" class="py-0 py-sm-4">
        <v-card elevation="4"
                outlined
                height="97%"
        >
          <v-container>
            <v-row class="py-2">
              <v-col>
                <span class="font-weight-bold">{{ $t('resume.stackLabel') }}</span>
                <div class="pt-2">
                  <div v-for="(val, name) in stack"
                      :key="name"
                      class="text-body-2 mb-4"
                  >
                    <v-divider></v-divider>
                    <p class="ma-0 pl-4 my-font">{{ $t('resume.stackParagraphs.' + name ) }}</p>
                    <ul>
                      <li
                        v-for="(skill, idx) in val"
                        class="ml-6"
                        :key="idx">
                        {{ skill }}
                      </li>
                    </ul>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppPageTitle from '../components/ui/AppPageTitle'
export default {
  components: { AppPageTitle },
  name: 'About',
  mounted() {
  },
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 150
        case 'sm':
          return 150
        case 'md':
          return 200
        case 'lg':
          return 200
      }
      return 200
    },
    breakpoint() {
      return this.$vuetify.breakpoint.width >= 460
    },
    currentLangIsNotEnglish() {
      return this.$i18n.locale !== 'en'
    },
    stack() {
      const stack = this.$store.getters['statement/stack']
      if (stack) {
        const result = Object.keys(stack).sort((f, s) => {
          if (f === 'other') return 1
          if (s === 'other') return -1
          return 0
        }).map(i => ({ [i]: { ...stack[i] } }))

        return Object.assign({}, ...result)
      }
      return null
    }
  }
}
</script>
<style lang="scss">
@import "src/sass/template";
.my-font {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.0892857143em !important;
  text-transform: uppercase !important;
  font-family: "JetBrains Mono Light", sans-serif !important;
}

ul {
  font-family: $body-font-family;
  flex-wrap: wrap;
  li {
    flex: 0 0 50%;
    @media (max-width: 600px) {
      flex: 0 0 100%
    }
  }
}
</style>

<template>
  <div>
    <AppLoader v-if="loading"></AppLoader>
    <div v-else>
      <v-card
        elevation="0"
      >
        <v-card-title class="justify-end text--disabled px-2 py-0 my-font"
                      v-text="'<!--About-->'"
        ></v-card-title>
      </v-card>
      <v-row justify="center">
        <v-col cols="10" sm="8" md="7" lg="6">
          <v-card elevation="4"
                  outlined
                  shaped
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
                  :class="breakpoint ? 'pt-10' : 'pt-2'"
                >
                  <div class="pb-sm-5 pb-2">
                    <h3 class="pb-2 font-weight-bold text-uppercase text-h6 text-md-h5"
                    >{{ personal.name }}</h3>
                    <span class="pb-2">{{ personal.age }}</span><br>
                    <span>{{ personal.position }}</span><br>
                    <span>{{ personal.place }}</span>
                  </div>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="mt-0">
                <v-col>
                  <p>{{ personal.content }}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="py-2">
                <v-col>
                  <span>Stack:</span>
                  <ul class="d-flex pt-2">
                    <li v-for="(item, i) in stack"
                        :key="i"
                        class="text-body-2"
                    >{{ item.title }}
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

import AppLoader from '@/components/ui/AppLoader'

export default {
  name: 'About',
  mounted() {
    this.$store.dispatch('/')
  },
  data() {
    return {
      loading: true
    }
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
      return ''
    },
    breakpoint() {
      return this.$vuetify.breakpoint.width >= 460
    }
  },
  components: { AppLoader }
}
</script>
<style lang="scss">
.my-font {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.0892857143em !important;
  text-transform: uppercase !important;
  font-family: "JetBrains Mono Light", sans-serif !important;
}

ul {
  flex-wrap: wrap;

  li {
    flex: 0 0 50%;
    @media (max-width: 600px) {
      flex: 0 0 100%
    }
  }
}
</style>

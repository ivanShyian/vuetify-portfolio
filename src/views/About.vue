<template>
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
            <p class="text--disabled text-button text-label hidden-sm-and-down" v-text="'<!--About-->'"></p>
            <v-col
              :cols="breakpoint ? 6 : 12"
              :class="breakpoint ? 'pt-10' : 'pt-2'"
            >
              <div class="pb-sm-5 pb-2">
                <h3 class="pb-2 font-weight-bold text-uppercase text-h6 text-md-h5">Ivan Shyian</h3>
                <span class="pb-2">23 years old</span><br>
                <span>Frontend developer</span><br>
                <span>Kyiv, Ukraine</span>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-0">
            <v-col>
              <p>Hello! My name is Ivan, I am 23 years old and I was born in Kiev.<br>
                In February of this year, I graduated from the university and received a Bachelor's degree in Software
                Engineering.<br>
                Throughout the year I have been intensively studying front-end development. The entire learning process
                proceeded independently through reading the documentation and analyzing examples of experienced
                developers. I got most of my knowledge from courses that took my knowledge to the next level.</p>
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
                >{{ item.title }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      stack: [
        { title: 'HTML' },
        { title: 'CSS, SASS & LESS' },
        { title: 'JavaScript' },
        { title: 'ReactJS, React Native' },
        { title: 'Vue 2, Vuex, VueRouter, Vuetify' },
        { title: 'Vue 3, Option & Composition API' }
      ]
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
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

<template>
  <v-sheet
    color="white"
  >
    <v-card
      elevation="0"
    >
      <v-card-title class="justify-end text--disabled text-button pa-2 my-font"
                    v-text="'<!--Study-->'"
      ></v-card-title>
    </v-card>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="9" lg="8">
        <v-expansion-panels
          v-model="panel"
          :disabled="disabled"
          multiple
        >
          <v-expansion-panel
            v-for="c in courses"
            :key="c.id"
          >
            <v-expansion-panel-header
              class="text-subtitle-2 text-md-button font-md-weight-bold"
            >{{ c.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-body-2 text-md-body-1">{{ c.content }}</p>
              <span v-if="c.cert"
                    class="text-body-2 text-md-body-1"
              >Certificate link -
                <v-btn
                  :href="c.cert"
                  link
                  text
                  small
                  target="_blank"
                >*Click*</v-btn>
              </span>
              <div class="d-flex justify-space-between text-caption text-lg-body-2 pt-4">
                <span>Author: <b>{{ c.author }}</b></span>
                <span>Theory time: <b>{{ c.theoryTime }}</b></span>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      disabled: false,
      readonly: false,
      courses: [
        {
          id: 0,
          name: 'The Complete JavaScript + React Course',
          content: 'Course where i learn most useful information about Javascript and how it works',
          theoryTime: '41,5 hours',
          author: 'Ivan Petrychenko'
        },
        {
          id: 1,
          name: 'React + Redux - Professional Development',
          content: 'An online course where I became acquainted with the JavaScript React.js framework. A total of 20 hours of theory were passed',
          theoryTime: '22 hours',
          author: 'Juriy Bura'
        },
        {
          id: 2,
          name: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
          content: 'Online course where i got acquainted with Vue 2 and a little bit with Vue 3',
          theoryTime: '48,5 hours',
          author: 'Maximilian Schwarzmüller'
        },
        {
          id: 3,
          name: 'Vue 3 - Profession',
          content: 'The most useful course where i learned how to use Vue 3 in production. How develop any application on this framework',
          cert: 'https://drive.google.com/file/d/1BarAE58yFzzOH0k4w1cEv2tf4uINM3OJ/view?usp=sharing',
          theoryTime: '20 hours',
          author: 'Vladilen Minin'
        }
      ]
    }
  }
}
</script>

<style scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}

</style>

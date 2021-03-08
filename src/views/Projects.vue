<template>
  <v-sheet
    color="white"
  >
    <v-row>
      <v-col>
        <v-card
          elevation="0"
        >
          <v-card-title class="justify-end text--disabled text-button pa-2 my-font"
                        v-text="'<!--Projects-->'"
          ></v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="proj in projects"
             :key="proj.id"
             cols="12" sm="6" md="4"
      >
        <v-card
          min-height="400"
          elevation="2"
          outlined
          class="d-flex flex-column pt-2">
          <v-img
            max-height="150"
            contain
            :src="require(`@/assets/projects/${proj.img}`)"
          ></v-img>
          <v-divider class="mt-3"></v-divider>
          <v-card-title class="text-subtitle-1 text-sm-h6 font-weight-regular">{{ proj.label }}</v-card-title>
          <v-card-text>{{ proj.text }}</v-card-text>
          <v-card-actions class="justify-end mt-auto">
            <v-btn color="#29B6F6"
                   dark
            >Open
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
          <v-card-title class="justify-center">{{ additional.label }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text
          >{{ additional.text }}
            <v-btn
              text
              link
              small
              class="py-0 text-caption"
              target="_blank"
              :href="additional.link">*Link*
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
      projects: [
        {
          id: 0,
          name: 'Fitbody',
          label: 'FitBody web-application',
          img: 'fitbody/fitbody.png',
          text: 'Fitbody application that help people to gain, lose or keep weight and easily enabled to follow your diet'
        },
        {
          id: 1,
          name: 'Store',
          img: 'vuestore/VueStore.png',
          label: 'Vue-Store',
          text: 'Store where you can commit that has most of functionality like any other online-store'
        },
        {
          id: 2,
          name: 'Todo',
          img: 'todo/todo.png',
          label: 'Simplest Todo',
          text: 'TodoList - helps to not forget and organize your day'
        }
      ],
      additional: {
        label: 'Additional info',
        text: 'Of course, these are not all of my projects. There were a couple of sites that' +
          ' I could show you but I think you are not interested in pure html and css. At this point in time, all forces are thrown into the development with Vue2, Vue3 and also NuxtJS.' +
          ' Anyway you can check my github for all repositories that i have: ',
        link: 'https://github.com/ivanShyian'
      }
    }
  }
}
</script>

<style scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}

</style>

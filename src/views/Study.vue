<template>
  <v-sheet
    color="white"
  >
    <app-page-title/>
    <v-row
      justify="center"
      class="pt-6"
    >
      <v-col cols="12" sm="10" md="9" lg="8">
        <v-expansion-panels
          v-model="panel"
          :disabled="disabled"
        >
          <v-expansion-panel
            v-for="(c, i) in courses"
            :key="i"
          >
            <v-expansion-panel-header
              class="text-subtitle-2 text-md-button font-md-weight-bold"
            >{{ $t(`study.courseList[${c.id}].name`) }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-body-2 text-md-body-1">{{ $t(`study.courseList[${c.id}].content`) }}</p>
              <span v-if="c.cert"
                    class="text-body-2 text-md-body-1"
              >{{ $t('study.certLink') }}
                <v-btn
                  :href="c.cert"
                  link
                  text
                  small
                  target="_blank"
                >*Click*</v-btn>
              </span>
              <div class="d-flex justify-space-between text-caption text-lg-body-2 pt-4">
                <span>{{ $t('study.author') }}: <b>{{ $t(`study.courseList[${c.id}].author`) }}</b></span>
                <span>{{ $t('study.theoryTime') }}: <b>{{ $t(`study.courseList[${c.id}].theoryTime`) }}</b></span>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import AppPageTitle from '../components/ui/AppPageTitle'
export default {
  components: { AppPageTitle },
  data() {
    return {
      panel: [],
      disabled: false,
      readonly: false
    }
  },
  computed: {
    courses() {
      return this.$store.getters['statement/study']
    }
  }
}
</script>

<style scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}

</style>

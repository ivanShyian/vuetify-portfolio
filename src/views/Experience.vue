<template>
  <div class="d-flex flex-column justify-center full-height">
    <app-page-title/>
    <v-row class="mt-n1">
      <v-col>
        <v-card
          elevation="4"
          class="pt-2"
          outlined
          v-for="(jobs, idx) in myJobs"
          :key="idx"
        >
          <v-card-title class="font-weight-bold">{{ $t(`experience.jobs[${idx}].title` ) }}</v-card-title>
          <v-card-subtitle class="exp-card-subtitle">
            <p>{{ $t(`experience.jobs[${idx}].subtitle`) }}</p>
            <p><span class="font-weight-bold">{{ $t('experience.position') }}:</span> {{ $t(`experience.jobs[${idx}].position`) }}</p>
            <p><span class="font-weight-bold">{{ $t('experience.workingTime') }}:</span> {{ $t(`experience.jobs[${idx}].workingTime`) }}</p>
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="7" lg="8">
                <p>
                  {{ $t(`experience.jobs[${idx}].content`) }}
                </p>
              </v-col>
              <v-divider
                class="hidden-xs-only"
                vertical
              ></v-divider>
              <v-col col="12" sm="4" lg="3">
                <ul>
                  <li class="responsibilities-item">
                    <span>{{ $t('experience.responsibilities') }}</span>
                  </li>
                  <li
                    v-for="(r, id) in myJobs[idx].responsibilities"
                    :key="id"
                  >
                    <span>{{ $t(`experience.jobs[${idx}].responsibilities[${id}]`) }}</span>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppPageTitle from '../components/ui/AppPageTitle'
import { mapGetters } from 'vuex'

export default {
  components: { AppPageTitle },
  computed: {
    ...mapGetters({
      myJobs: 'statement/jobs'
    })
  }
}
</script>

<style lang="scss" scoped>
.responsibilities-item {
  list-style: none;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 .5rem -1rem;
}

.exp-card-subtitle {
  p:not(:first-child) {
    margin: 0;
  }
}
</style>

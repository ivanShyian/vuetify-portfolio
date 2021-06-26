<template>
  <v-main>
    <v-container>
      <AppLoader v-if="loading"/>
      <router-view v-else/>
      <TheComponentLocker/>
    </v-container>
  </v-main>
</template>
<script>
import AppLoader from '@/components/ui/AppLoader'
import { mapGetters } from 'vuex'
import TheComponentLocker from './ui/TheComponentLocker'
export default {
  computed: {
    ...mapGetters({
      loading: 'loader/loading'
    })
  },
  components: {
    TheComponentLocker,
    AppLoader
  }
}
</script>

<template>
  <v-app>
    <TheNavbar/>
    <TheMain></TheMain>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
import TheMain from '@/components/TheMain'
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('statement/loadStatementData')
  },
  components: {
    TheMain,
    TheFooter,
    TheNavbar
  }
}
</script>
<style lang="scss">
@import "template";
.v-application {
  font-family: $body-font-family, $body-font-family-second, sans-serif !important;
  .title {
  font-family: $title-font, $title-font-second,sans-serif !important;
  }
}
</style>

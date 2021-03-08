<template>
  <v-app>
    <TheNavbar/>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    TheFooter,
    TheNavbar
  }

}
</script>
<style lang="scss">
@import "template";
.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
  font-family: $title-font, sans-serif !important;
  }
}
</style>

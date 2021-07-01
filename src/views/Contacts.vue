<template>
  <v-sheet class="full-height">
    <app-page-title/>
    <v-row justify="center" class="mt-md-10 d-flex align-center">
      <v-col cols="12" sm="6" md="4"
             v-for="item in social"
             :key="item.id"
      >
        <ContactsCard :item="item"></ContactsCard>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import ContactsCard from '@/components/contacts/ContactsCard'
import AppPageTitle from '../components/ui/AppPageTitle'
import ComponentLocker from '../utils/componentLocker'
export default {
  computed: {
    social() {
      return this.$store.getters['statement/contacts']
    }
  },
  beforeRouteEnter: ComponentLocker.checkLocker,
  components: { AppPageTitle, ContactsCard }
}
</script>

<style scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}

</style>

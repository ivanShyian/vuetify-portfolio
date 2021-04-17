<template>
  <v-sheet>
    <v-row>
      <v-col>
        <v-card
          elevation="0"
        >
          <v-card-title class="justify-end text--disabled text-button px-2 py-0 my-font"
                        v-text="$t('contacts.page')"
          ></v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
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
export default {
  computed: {
    social() {
      return this.$store.getters['statement/contacts']
    }
  },
  components: { ContactsCard }
}
</script>

<style scoped>
.my-font {
  font-family: "JetBrains Mono Light", sans-serif !important;
}

</style>

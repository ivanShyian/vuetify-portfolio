<template>
  <v-menu
    offset-y
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        elevation="0"
        color="transparent"
        class="white--text mr-5"
        v-bind="attrs"
        v-on="on"
        rounded
        small
      >
        {{ activeLang }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="item in availableLangs"
        :key="item"
        link
        @click="setActive(item)"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      languages: ['English', 'Russian', 'Ukrainian'],
      selected: 0
    }
  },
  methods: {
    setActive(lang) {
      const locale = lang.toLowerCase().substring(0, 2)
      if (this.$i18n.locale !== locale) {
        this.selected = this.languages.findIndex(i => i === lang)
        this.$i18n.locale = locale

        const to = this.$router.resolve({ params: { locale } })
        this.$router.push(to.location)
      }
    }
  },
  computed: {
    activeLang() {
      return this.languages[this.selected]
    },
    availableLangs() {
      return this.languages.filter(el => el !== this.activeLang)
    }
  }
}
</script>

<style scoped lang="scss">
.v-input__control {
  align-items: center;
}
</style>

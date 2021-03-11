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
        {{ supportedLocales }}

      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="item in supportedLocales"
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
import { Trans } from '@/plugins/translation'

export default {
  name: 'TheLocalSwitcher',
  data() {
    return {
      languages: ['English', 'Russian', 'Ukrainian'],
      selected: 0
    }
  },
  computed: {
    supportedLocales() {
      return Trans.supportedLocales
    },
    activeLang() {
      return this.languages[this.selected]
    },
    availableLangs() {
      return this.languages.filter(el => el !== this.activeLang)
    }
  },
  methods: {
    setActive(locale) {
      // const locale = lang.toLowerCase().substring(0, 2)
      if (this.$i18n.locale !== locale) {
        // this.selected = this.languages.findIndex(i => i === lang)
        const to = this.$router.resolve({ params: { locale } })
        return Trans.changeLocale(locale).then(() => {
          this.$router.push(to.location)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-input__control {
  align-items: center;
}
</style>

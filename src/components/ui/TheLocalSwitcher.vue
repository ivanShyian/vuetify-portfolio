<template>
  <v-menu
    offset-y
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        color="transparent"
        class="mr-5"
        v-bind="attrs"
        v-on="on"
        small
        :elevation="isDrawerView ? 0 : 1"
        :rounded="!isDrawerView"
        :light="isDrawerView"
        :width="isDrawerView ? '100%' : 'auto'"
      >
        <span :style="isDrawerView ? 'border-bottom: 1px solid rgba(0, 0, 0, .2)' : ''">{{ currentLocale }}</span>
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
  props: {
    isDrawerView: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      languages: ['English', 'Russian', 'Ukrainian']
    }
  },
  computed: {
    supportedLocales() {
      return this.languages.filter(i => i !== this.currentLocale)
    },
    currentLocale() {
      return this.languages.find(el => {
        return el.toLowerCase().substring(0, 2) === Trans.currentLocale
      })
    }
  },
  methods: {
    setActive(newLocale) {
      const locale = newLocale.toLowerCase().substring(0, 2)
      if (this.$i18n.locale !== locale) {
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

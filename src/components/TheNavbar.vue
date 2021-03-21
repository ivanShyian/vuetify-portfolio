<template>
  <div>
    <v-app-bar app
               dark
               color="#29B6F6">
      <v-toolbar-title class="font-weight-medium">Ivan Shyian
        <span class="text-overline text--disabled">Portfolio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up"
                          @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <TheLocalSwitcher></TheLocalSwitcher>
        <router-link v-for="(link, i) in items"
                     :to="$i18nRoute({ name: link.title })"
                     v-slot="{ navigate }"
                     :key="i"
                     custom
        >
          <v-btn text @click="navigate">
            <v-icon small left>{{ link.icon }}</v-icon>
            {{ navigationName(link.title) }}
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-if="drawer"
      v-model="drawer"
      absolute
      temporary
      right>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Navigation</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.src"
          link
        >
          <v-list-item-icon>
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ navigationName(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import TheLocalSwitcher from '@/components/ui/TheLocalSwitcher'
export default {
  components: { TheLocalSwitcher },
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'Resume',
          src: '/',
          icon: 'fa-user-ninja'
        },
        {
          title: 'Experience',
          src: '/experience',
          icon: 'fa-briefcase'
        },
        {
          title: 'Study',
          src: '/study',
          icon: 'fa-graduation-cap'
        },
        {
          title: 'Contacts',
          src: '/contacts',
          icon: 'fa-id-card'
        }
      ]
    }
  },
  methods: {
    navigationName(name) {
      const value = `navigation.${name.toLowerCase()}`
      return this.$t(value)
    }
  }
}
</script>

<style>

</style>

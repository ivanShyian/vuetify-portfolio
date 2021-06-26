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
        <v-row v-if="loading" class="d-flex align-center">
          <v-col
            class="d-flex justify-end full-height"
          >
            <v-skeleton-loader
              v-bind="attrs"
              :type="'button@' + (items.length + 1)"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <div v-else class="full-height d-flex align-center">
          <!--LOCAL SWITCHER-->
          <TheLocalSwitcher
          ></TheLocalSwitcher>
          <router-link v-for="(link, i) in items"
                       :to="$i18nRoute({ name: link.name })"
                       v-slot="{ navigate }"
                       :key="i"
                       custom
          >
            <v-btn text @click="navigate" height="100%">
              <v-icon small left>{{ link.icon }}</v-icon>
              {{ navigationName(link.title) }}
            </v-btn>
          </router-link>
        </div>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-if="drawer"
      v-model="drawer"
      style="position: fixed; top: 0; right: 0;"
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
          :to="$i18nRoute({ name: item.name })"
          :exact="item.src === '/'"
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
      <v-divider></v-divider>
      <TheLocalSwitcher
        isDrawerView
      ></TheLocalSwitcher>
    </v-navigation-drawer>
  </div>
</template>

<script>
import TheLocalSwitcher from '@/components/ui/TheLocalSwitcher'
import { ArrowListenerMixin } from '../mixins/ArrowKeyRouter'
import { mapGetters } from 'vuex'

export default {
  components: { TheLocalSwitcher },
  mixins: [ArrowListenerMixin],
  data() {
    return {
      drawer: false,
      attrs: {
        class: 'd-flex btn-skeleton-loader full-height mr-3',
        elevation: 0
      },
      items: [
        {
          title: 'Resume',
          name: 'Resume',
          src: '/',
          icon: 'fa-user-ninja'
        },
        {
          title: 'Study',
          name: 'Study',
          src: '/study',
          icon: 'fa-graduation-cap'
        },
        {
          title: 'Projects',
          name: 'Projects',
          src: '/projects',
          icon: 'fa-code-branch'
        },
        {
          title: 'Experience',
          name: 'Experience',
          src: '/work-experience',
          icon: 'fa-briefcase'
        },
        {
          title: 'Contacts',
          name: 'Contacts',
          src: '/contacts',
          icon: 'fa-id-card'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loader/loading'
    })
  },
  methods: {
    navigationName(name) {
      const value = `navigation.${name.toLowerCase()}`
      return this.$t(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-skeleton-loader {
  ::v-deep .v-skeleton-loader__button {
    margin: 0 2px;
    width: 150px;
    height: 100%;
  }
}
</style>

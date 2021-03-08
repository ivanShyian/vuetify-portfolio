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
        <v-btn v-for="(link, i) in items"
               text
               :to="link.src"
               :key="i">
          <v-icon small left
          >{{ link.icon }}</v-icon>
          {{ link.title }}</v-btn>
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
          link>
          <v-list-item-icon>
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'About',
          src: '/',
          icon: 'fa-user-ninja'
        },
        {
          title: 'Projects',
          src: '/projects',
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
  }
}
</script>

<style>

</style>

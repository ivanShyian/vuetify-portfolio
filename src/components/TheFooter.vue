<template>
  <v-footer
    dark
    padless
    color="#29B6F6">
    <v-container>
      <v-card
        flat
        tile
        color="#29B6F6"
        class="white--text text-center">
        <v-card-text
          class="pa-0"
          v-if="loading"
        >
          <v-skeleton-loader
            v-bind="attrs"
            type="avatar@4"
          ></v-skeleton-loader>
        </v-card-text>
        <v-card-text
          class="pa-0"
          v-else
        >
          <v-btn
            @click.prevent="clickHandler(item)"
            v-for="item in social"
            :key="item.id"
            class="mx-4 my-0 white--text"
            icon
            link
          >
            <v-icon size="18px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider class="py-1"></v-divider>
        <v-card-text class="white--text py-0">
          {{ new Date().getFullYear() }} — <strong>IS</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
import componentLocker from '@/utils/componentLocker'

export default {
  data() {
    return {
      attrs: {
        class: 'd-flex justify-center pb-1 skeleton-footer-btns'
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loader/loading'
    }),
    social() {
      return this.$store.getters['statement/socialFooter']
    }
  },
  methods: {
    clickHandler(item) {
      const lock = localStorage.getItem('lock')
      if (lock === 'opened') {
        window.open(item.link, '_blank')
      } else {
        componentLocker.checkLocker()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.skeleton-footer-btns {
  ::v-deep .v-skeleton-loader__avatar {
    display: flex;
    width: 32px;
    height: 32px;
    margin: 0 1.1rem;
  }
}
</style>

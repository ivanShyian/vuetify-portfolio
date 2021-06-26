export const ArrowListenerMixin = {
  mounted() {
    this.addArrowListener()
  },
  methods: {
    addArrowListener() {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          if (!this.canRoute) return
          const key = e.key.substring(5).toLowerCase()
          const items = Object.keys(this.items)
          const lengthOfPages = items.length
          const currentPageName = this.$route.name
          const currentPageIndex = items.findIndex(item => this.items[item].title === currentPageName)
          const namesOfPages = items.map(e => this.items[e].name)
          this.routeToPage({ currentPageIndex, lengthOfPages, key, pages: namesOfPages })
        }
      })
    },
    routeToPage({ key, pages, currentPageIndex, lengthOfPages }) {
      if (key === 'left') {
        if (currentPageIndex === 0) return

        this.$router.push(this.$i18nRoute({
          name: pages[currentPageIndex - 1]
        }))
      }
      if (key === 'right') {
        if (currentPageIndex === lengthOfPages - 1) return

        this.$router.push(this.$i18nRoute({
          name: pages[currentPageIndex + 1]
        }))
      }
    }
  },
  computed: {
    canRoute() {
      return Object.keys(this.items).map(n => this.items[n].name).includes(this.$route.name)
    }
  }
}

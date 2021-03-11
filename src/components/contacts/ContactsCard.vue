<template>
  <v-card>
    <v-card-title class="font-weight-light justify-center">
      <v-icon size="24px" class="mr-2">{{ item.icon }}</v-icon>
      {{ item.name }}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions class="text-body-2 text-center">
      {{ textBeforeLink }}
      <v-btn
        text
        :href="correctLink"
        :target="item.type === 'phone' ? '_parent' : '_blank'"
        class="text-caption"
      >{{ linkToShow }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    textBeforeLink() {
      if (this.item.type === 'phone') {
        return 'Phone: '
      } else if (this.item.type === 'email') {
        return 'Email: '
      } else {
        return 'Link: '
      }
    },
    correctLink() {
      if (this.item.type === 'phone') {
        return `tel:${this.item.link}`
      } else if (this.item.type === 'email') {
        return `mailto:${this.item.link}`
      } else {
        return this.item.link
      }
    },
    linkToShow() {
      if (this.item.name === 'CV (Resume)') {
        return '*Too long link - just click*'
      } else if (this.item.type === 'phone' || this.item.type === 'email') {
        return this.item.link
      } else {
        return this.item.link.substring(8)
      }
    }
  }
}
</script>

<style scoped>

</style>

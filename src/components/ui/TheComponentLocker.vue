<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        :value="dialog"
        persistent
      >
        <template>
          <v-card>
            <v-toolbar
              color="primary"
              class="d-flex justify-space-between"
              dark
            >
              <span>Ooops...</span>
            </v-toolbar>
            <v-card-text>
              <div class="pa-6 pb-0">
                <p class="text-body-1 ">There is locked unfortunately.. By the way if you know some magic keyword (that opens everything) from the world where pictures are talking - it's not a big deal for you to unlock this</p>
                <p class="text-body-2 text--disabled">P.S. He has glasses..</p>
                <p class="text-caption text--disabled">P.S.2 Auth-or added this for a bit of privacy.. just a bit</p>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-input>
                <template>
                  <v-text-field
                    class="pl-6 mr-4"
                    :label="`Type here on ${exactLabel}`"
                    v-model="message"
                    :rules="rules"
                    :error-messages="errorMessage.length ? errorMessage : ''"
                    :error="error"
                    hide-details="auto"
                    @keydown.enter="handleSubmit"
                  ></v-text-field>
                  <div class="mt-4">
                    <v-btn
                      text
                      @click="handleSubmit"
                    >Send</v-btn>
                    <v-btn
                      text
                      @click.prevent="handleClose"
                    >Close</v-btn>
                  </div>
                </template>
              </v-input>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import ComponentLocker from '../../utils/componentLocker'
export default {
  props: {
    lockedComponents: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      rules: [
        value => !!value || 'It\'s can\'t be empty.'
      ],
      message: '',
      errorMessage: '',
      error: false
    }
  },
  computed: {
    dialog() {
      return this.$store.getters['dialog/isShowedDialog']
    },
    component() {
      const fullLocation = window.location.pathname.split('/')
      const currentLocation = fullLocation[fullLocation.length - 1]
      return currentLocation.toLowerCase()
    },
    exactLabel() {
      switch (this.$i18n.locale) {
        case 'ru':
          return 'Russian'
        case 'uk':
          return 'Ukrainian'
        default:
          return 'English'
      }
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.message) {
        this.error = true
        this.errorMessage = 'It\'s can\'t be empty.'
      }
      if (this.message.length) {
        this.error = false
        const result = await ComponentLocker.checkUserKeyWord(this.message)
        if (result) {
          this.errorMessage = ''
          return
        }
        this.errorMessage = 'Wrong keyword. Try again!'
      }
    },
    handleClose() {
      if (this.lockedComponents.includes(this.component)) {
        this.$router.replace('/')
      }
      this.$store.dispatch('dialog/changeProtectionDialogStatus', false)
    }
  }
}
</script>

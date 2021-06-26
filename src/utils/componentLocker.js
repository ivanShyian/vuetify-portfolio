import { i18n } from '../i18n'
import { Trans } from '../plugins/translation'
import store from '../store'
import router from '../router'

export class ComponentLocker {
  checkLocker = (to, from, next) => {
    const lock = localStorage.getItem('lock')
    if (lock === 'opened') {
      this.changeDialogStatus(false)
      next()
    }
    if (!lock) {
      this.changeDialogStatus(true)
    }
  }

  async checkUserKeyWord(value) {
    const keyword = this.getNeededKeyword

    if (keyword === value.toLowerCase()) {
      localStorage.setItem('lock', 'opened')
      await router.push(Trans.i18nRoute({
        name: 'Contacts'
      }))
      return true
    }
  }

  changeDialogStatus(value) {
    store.dispatch('dialog/changeProtectionDialogStatus', value)
  }

  get getNeededKeyword() {
    switch (i18n.locale) {
      case 'ru':
        return 'алохомора'
      case 'uk':
        return 'алогомора'
      default:
        return 'alohomora'
    }
  }
}

const locker = new ComponentLocker()
export default locker

import { i18n } from '@/i18n'
import axios from 'axios'
import store from '../store'
import { JSFileIsNotEmpty } from '../utils/fs'

let previousLocale = null

const Trans = {
  get defaultLocale() {
    return process.env.VUE_APP_I18N_LOCALE
  },
  get supportedLocales() {
    return process.env.VUE_APP_I18N_SUPPORTED_LOCALE
  },
  get currentLocale() {
    return i18n.locale
  },
  set currentLocale(locale) {
    i18n.locale = locale
  },

  changeLocale(locale) {
    if (!Trans.isLocaleSupported(locale)) {
      return Promise.reject(new Error('Locale not supporting'))
    }
    if (i18n.locale === locale) return Promise.resolve(locale)

    // Take localStorage clean :)
    localStorage.removeItem(previousLocale)

    return Trans.loadLocaleFile(locale).then(msgs => {
      i18n.setLocaleMessage(locale, msgs.default || msgs)
      return Trans.setI18nLocaleInServices(locale)
    })
  },

  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },

  async loadLocaleFile(locale) {
    if (!JSFileIsNotEmpty(locale)) {
      await store.dispatch('loader/loadingStatusHandler', true)
      await store.dispatch('languages/loadLanguage', locale)
    }

    const res = await import(`@/locales/${locale}.js`)
    const variables = Object.keys(res).map(i => res[i])[0]

    if (!Object.keys(variables).length) {
      const newWindowLocation = window.location.href.split('/')
      newWindowLocation.splice(3, 1, locale)
      window.location.href = newWindowLocation.join('/')
    }

    previousLocale = Object.keys(res)[0]
    return variables
  },

  setI18nLocaleInServices(locale) {
    Trans.currentLocale = locale
    axios.defaults.headers.common['Accept-language'] = locale
    document.querySelector('html').setAttribute('lang', locale)
    return locale
  },
  getUserSupportedLocale() {
    const userPreferredLocale = Trans.getUserLocale()

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoISO)) {
      return userPreferredLocale.localeNoISO
    }

    return Trans.defaultLocale
  },
  getUserLocale() {
    const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale

    return {
      locale: locale,
      localeNoISO: locale.split('-')[0]
    }
  },
  routeMiddleware(to, from, next) {
    const locale = to.params.locale
    if (!Trans.isLocaleSupported(locale)) return next(Trans.getUserSupportedLocale())
    return Trans.changeLocale(locale).then(() => next())
  },
  i18nRoute(to) {
    return {
      ...to,
      params: { locale: this.currentLocale, ...to.params }
    }
  }
}

export { Trans }

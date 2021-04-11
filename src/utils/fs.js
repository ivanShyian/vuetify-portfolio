export function JSFileIsNotEmpty(locale) {
  if (locale === 'en') return
  try {
    const requiredLocale = require(`../locales/${locale}.js`)

    return !!Object.keys(requiredLocale.default).length
  } catch (e) {
    console.warn(e.message)
  }
}

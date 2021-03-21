export function JSFileIsNotEmpty(locale) {
  try {
    const requiredLocale = require(`../locales/${locale}.js`)
    console.log(Object.keys(requiredLocale.default).length)
    return !!Object.keys(requiredLocale.default).length
  } catch (e) {
    console.warn(e.message)
  }
}

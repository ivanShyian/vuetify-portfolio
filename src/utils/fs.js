export function JSFileIsNotEmpty(locale) {
  if (locale === 'en') return true
  try {
    const requiredLocale = require(`../locales/${locale}.js`)
    return !!Object.keys(requiredLocale[locale]).length
  } catch (e) {
    console.warn(e.message)
  }
}

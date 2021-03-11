module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}

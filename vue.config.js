module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy: 'http://10.0.52.70:8002/',
    port: 3000
  }
}

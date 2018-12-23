const files = require.context('.', false, /\.js$/)
const modules: any = {}

files.keys().forEach((key) => {
  if (key === './index.js') {
    return
  }

  const name = key.replace(/(\.\/|\.js)/g, '')
  modules[name] = files(key).default
})

export default modules

const files = require.context('.', false, /\.js$/)
const getters: any = {}

files.keys().forEach((key) => {
  if (key === './index.js') {
    return
  }

  const file = files(key)
  for (const val in file) {
    if (file.hasOwnProperty(val)) {
      getters[val] = file[val]
    }
  }
})

export default getters

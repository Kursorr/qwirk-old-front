const files = require.context('.', false, /\.js$/)
const actions: any = {}

files.keys().forEach((key) => {
  if (key === './index.js') {
    return
  }

  const file = files(key)
  for (const val in file) {
    if (file.hasOwnProperty(val)) {
      actions[val] = file[val]
    }
  }
})

export default actions

function maPromesse (index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index < 0) return reject(new Error('Index négatif'))
      return resolve(`mon message ${index}`)
    }, 2000)
  })
}

maPromesse(-1)
  .catch((err) => {
    console.log(err.message)
  })
  .then((result) => {
    console.log(result)
    return maPromesse(3)
  })
  .then(console.log)

console.log('message 1')
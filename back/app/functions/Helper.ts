const isEmpty = (field) => {
  return (field === undefined || field === null || field === '' || field === [] || field === false)
}

const randomTag = (min: number, max: number) => {
    return '#' + ((Math.random() * (max - min + 1) | 0) + min)
}

export { isEmpty, randomTag }

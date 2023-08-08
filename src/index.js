module.exports = function towelSort(matrix = []) {
  return matrix
      .reduce((arr, value, index) => {
          if (index % 2 === 1) {
              console.log(`odd: ${index} : ${value}`)
              return [...arr, value.sort((a, b) => b - a)]
          } else {
              console.log(`even: ${index} :${value}`)
              return [...arr, value]
          }
      }, [])
      .flat()
}

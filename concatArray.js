const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if((array1 === null || array1 === undefined) && (array2 === null|| array2 === undefined)) {
    return undefined
  } else if(array1 === [] && array2 === []) {
    return []
  } else if(array2 === null || array2 === undefined || array2 === []) {
    return array1
  } else if(array1 === null || array1 ===undefined || array1 === []) {
    return array2
  } else return array1.concat(array2)
}
//console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
//console.log(concatArray([1,2,3],[]))
//console.log(concatArray([1,2], ['item1', 'item2', 'item3']))
//console.log(concatArray([1,2,3],[]))
// console.log(concatArray([],[]))
// console.log(concatArray([], ['item1', 'item2', 'item3']))
// console.log(concatArray([10, 6, 5], []))
// console.log(concatArray(undefined, [2, 4, 6, 7]))
// console.log(concatArray([2, 4, 6, 7], null))
// console.log(concatArray(undefined, undefined))
// console.log(concatArray(null, undefined))
// console.log(concatArray(undefined, null))
// console.log(concatArray(null, null))
module.exports = concatArray



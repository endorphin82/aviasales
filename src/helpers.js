// export function addOrRemove(array, value) {
//   var index = array.indexOf(value);
//
//   if (index === -1) {
//     array.push(value);
//   } else {
//     array.splice(index, 1);
//   }
// }

// export function addOrRemove(array, value) {
//   var index = array.indexOf(value);
//
//   if (index === -1) return array.pop(value); else {
//     return array.filter(item => item !== value);
//   }
// }

export const addOrRemove = (array, item) => {
  const exists = array.includes(item);
  if (exists) {
    return array.filter(c => c !== item );
  } else {
    const result = array;
    result.push(item);
    return result;
  }
}

// export const addOrRemove = (array, item) => {
//   const exists = array.includes(item);
//
//   if (exists) {
//     return array.splice(exists, 1);
//   } else {
//     const result = array;
//     result.push(item);
//     return result;
//   }
// }
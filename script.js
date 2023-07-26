obj = {x: 10, y: 20, inner: {x: 20, z: 30}, foo2: {k: 23, p: 13}}
resultObj = {x: "", y: "", z: "", k: "", p: ""};

// function convert(inputObj) {
//   resultObj.x = inputObj.inner.x;
//   resultObj.y = inputObj.y;
//   resultObj.z = inputObj.inner.z;
//   resultObj.k = inputObj.foo2.k;
//   resultObj.p = inputObj.foo2.p;
//   return resultObj;
// }
//
// console.log(convert(obj));
newObj = {};

function convert(objects) {
  for (el in objects) {
    if (typeof objects[el] === "object") {
      Object.assign(newObj, convert(objects[el]))
    } else {
      newObj[el] = objects[el];
    }
  }
  return newObj;
}

console.log(convert(obj));
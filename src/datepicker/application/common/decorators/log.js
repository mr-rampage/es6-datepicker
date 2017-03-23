export function log(name) {
  return function logger(target, property, descriptor) {
    console.log(`${name} arguments:`, target, property, descriptor);
    return descriptor;
  };
}

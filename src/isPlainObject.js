export default function isPlainObject(object) {
  return !!object && Object.is(object.constructor, Object)
}

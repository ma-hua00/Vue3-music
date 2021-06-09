import storage from 'good-storage'
// 添加歌曲到收藏
export function save(item, key, compare, maxLEN) {
  const list = storage.get(key, [])
  insertArray(list, item, compare, maxLEN)
  storage.set(key, list)
  return list
}
// 从收藏列表中移除
export function remove(key, compare) {
  const list = storage.get(key, [])
  deleteFromArray(list, compare)
  storage.set(key, list)
  return list
}

function insertArray(arr, val, compare, maxLEN) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    return
  }
  arr.unshift(val)
  if (arr.length > maxLEN) {
    arr.pop()
  }
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function loading(key) {
  return storage.get(key, [])
}

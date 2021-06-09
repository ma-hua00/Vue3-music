// 洗牌函数
export function shuffle(list) {
  const arr = list.slice()
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomItem(i)
    swap(arr, i, j)
  }
  return arr
}

function getRandomItem(max) {
  const randomNum = Math.floor(Math.random() * (max + 1))
  return randomNum
}

function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
// 格式化时间
export function formatTime(interval) {
  const time = interval | 0
  const minute = ((time / 60 | 0) + '').padStart(2, '0')
  const seconds = (time % 60 + '').padStart(2, '0')
  return `${minute}:${seconds}`
}

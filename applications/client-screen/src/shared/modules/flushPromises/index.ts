/**
 * @description
 * テストで 非同期処理を待つ
 */
export const flushPromises = () => new Promise((resolve) => {
  process.nextTick(resolve)
})

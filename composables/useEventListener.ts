/*
 * Straight out of Vue docs:
 * https://vuejs.org/guide/reusability/composables.html#mouse-tracker-example
 */
export function useEventListener(target: any, event: string, listener: any) {
  onMounted(() => {
    unref(target).addEventListener(event, listener)
  })

  onBeforeUnmount(() => {
    unref(target).removeEventListener(event, listener)
  })
}

export function useKeyListener(
  keys: Array<KeyboardEvent['key']> | KeyboardEvent['key'],
  listener: any
) {
  if (process.client) {
    keys = Array.isArray(keys) ? keys : [keys]
    useEventListener(window, 'keydown', (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        listener(event)
      }
    })
  }
}

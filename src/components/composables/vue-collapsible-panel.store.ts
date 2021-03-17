import { reactive } from 'vue'

// State
export const state = reactive({
  accordion: false,
  expandedMap: {} as Record<string, boolean>,
})

// Mutations
export const enableAccordion = (): void => {
  state.accordion = true
}

export const togglePanel = (idPanel: number | string): void => {
  if (!state.accordion) {
    state.expandedMap[idPanel] = !state.expandedMap[idPanel]
    return
  }

  if (!state.expandedMap[idPanel]) {
    Object.keys(state.expandedMap).forEach(
      (key) => { state.expandedMap[key] = false },
    )
  }

  state.expandedMap[idPanel] = !state.expandedMap[idPanel]
}

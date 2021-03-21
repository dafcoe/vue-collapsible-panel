import {
  computed,
  reactive,
} from 'vue'
import { VueCollapsiblePanelGroupState } from '@/components/vue-collapsible-panel.interface'

const state = reactive({
  panelGroups: {} as Record<string, VueCollapsiblePanelGroupState>,
})

export const useCollapsiblePanelStore = () => {
  const useGroupAccordion = (idGroup: string) => computed(
    () => state.panelGroups[idGroup].accordion,
  )

  const setGroupAccordionStatus = (idGroup: string, status: boolean) => {
    state.panelGroups[idGroup] = {
      ...state.panelGroups[idGroup],
      accordion: status,
    }
  }

  const panelExpanded = (idGroup: string, idPanel: string) => computed(
    () => state.panelGroups[idGroup]?.panelExpandStatus?.[idPanel] || false,
  )

  const setPanelExpandedStatus = (idGroup: string, idPanel: string, status: boolean) => {
    state.panelGroups[idGroup] = {
      ...state.panelGroups[idGroup],
      panelExpandStatus: {
        ...state.panelGroups[idGroup]?.panelExpandStatus || {},
        [idPanel]: status,
      },
    }
  }

  const togglePanelExpandedStatus = (idGroup: string, idPanel: string): void => {
    if (!state.panelGroups[idGroup].accordion) {
      state.panelGroups[idGroup].panelExpandStatus[idPanel] = !state.panelGroups[idGroup].panelExpandStatus[idPanel]
      return
    }

    if (!state.panelGroups[idGroup].panelExpandStatus[idPanel]) {
      Object.keys(state.panelGroups[idGroup].panelExpandStatus).forEach(
        (key) => { state.panelGroups[idGroup].panelExpandStatus[key] = false },
      )
    }

    state.panelGroups[idGroup].panelExpandStatus[idPanel] = !state.panelGroups[idGroup].panelExpandStatus[idPanel]
  }

  return {
    useGroupAccordion,
    setGroupAccordionStatus,
    panelExpanded,
    setPanelExpandedStatus,
    togglePanelExpandedStatus,
  }
}

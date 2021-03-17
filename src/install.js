import VueCollapsiblePanelGroup from '@/components/VueCollapsiblePanelGroup'
import VueCollapsiblePanel from '@/components/VueCollapsiblePanel'

const install = (Vue) => {
  Vue.component('vue-collapsible-panel-group', VueCollapsiblePanelGroup)
  Vue.component('vue-collapsible-panel', VueCollapsiblePanel)
}

export default install
export {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
}

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

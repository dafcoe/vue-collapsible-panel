<template>
  <div
    :data-id-group="idGroup"
    :style="cssColorVars"
    class="vcpg"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { nanoid, customAlphabet } from 'nanoid'
import {
  defineComponent,
  ref,
} from 'vue'
import { useCollapsiblePanelStore } from '@/components/composables/vue-collapsible-panel.store'
import { lightenDarkenColor } from '@/utils/color.util'

customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ', 21)

export default defineComponent({
  name: 'VueCollapsiblePanelGroup',
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    baseColor: {
      type: String,
      default: '#333333',
    },
    borderColor: {
      type: String,
      default: null,
    },
    bgColorHeader: {
      type: String,
      default: null,
    },
    bgColorHeaderHover: {
      type: String,
      default: null,
    },
    bgColorHeaderActive: {
      type: String,
      default: null,
    },
    bgColorBody: {
      type: String,
      default: '#fff',
    },
  },
  setup(props) {
    const idGroup = ref(`group-${nanoid()}`)
    const { setGroupAccordionStatus } = useCollapsiblePanelStore()
    const cssColorVars = {
      '--base-color': props.baseColor,
      '--border-color': lightenDarkenColor(props.borderColor, props.baseColor, 160),
      '--bg-color-header': lightenDarkenColor(props.bgColorHeader, props.baseColor, 170),
      '--bg-color-header-hover': lightenDarkenColor(props.bgColorHeaderHover, props.baseColor, 175),
      '--bg-color-header-active': lightenDarkenColor(props.bgColorHeaderActive, props.baseColor, 170),
      '--bg-color-body': lightenDarkenColor(props.bgColorBody, '#fff', 0),
    }

    setGroupAccordionStatus(idGroup.value, props.accordion)

    return {
      idGroup,
      cssColorVars,
    }
  },
})
</script>

<style lang="scss" scoped>
  .vcpg {
    border: 1px solid var(--border-color);
    border-radius: 4px;
    width: 100%;

    ::v-deep(.vcp) {
      * {
        box-sizing: border-box;
      }

      &__header {
        background-color: var(--bg-color-header);
        height: 46px;
        transition: background-color .3s ease;

        &:hover {
          background-color: var(--bg-color-header-hover);
        }

        &:active {
          background-color: var(--bg-color-header-active);
        }
      }

      &:not(:first-of-type) {
        .vcp__header {
          border-top: 1px solid var(--border-color);
        }
      }

      &__header-title {
        font-weight: 500;
      }

      &__body {
        border-top: 1px solid var(--border-color);
        background-color: var(--bg-color-body);
      }
    }
  }
</style>

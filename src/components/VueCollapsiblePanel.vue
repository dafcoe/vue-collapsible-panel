<template>
  <section
    class="vcp"
    :class="{
      'vcp--expanded': isExpanded,
      'vcp--expandable': body.hasContent,
    }"
  >
    <header
      class="vcp__header"
      @click="toggle"
    >
      <div class="vcp__header-title">
        <slot name="title" />
      </div>
      <div
        v-if="body.hasContent"
        class="vcp__header-icon"
      >
        <slot name="icon">
          <span v-html="toggleIcon" />
        </slot>
      </div>
    </header>

    <transition
      :data-key="body.dataKey"
      name="slide"
      @before-enter="collapse"
      @enter="expand"
      @before-leave="expand"
      @leave="collapse"
    >
      <div
        v-if="isExpanded"
        ref="bodyRef"
        class="vcp__body"
      >
        <div
          ref="bodyContentRef"
          class="vcp__body-content"
        >
          <slot name="content" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onUpdated,
  ref,
  onMounted,
} from 'vue'
import { VNodeArrayChildren } from '@vue/runtime-core'
import { toggleIcon } from '@/components/vue-collapsible-panel.constant'
import {
  state,
  togglePanel,
} from '@/components/composables/vue-collapsible-panel.store'

export default defineComponent({
  name: 'VueCollapsiblePanel',
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const idPanel = Date.now()
    const bodyRef = ref<HTMLElement>()
    const bodyContentRef = ref<HTMLElement>()

    const body = computed(
      () => ({
        hasContent: context.slots.content && (context.slots.content()[0].children as VNodeArrayChildren).length > 0,
        dataKey: Date.now(),
      }),
    )

    const isExpanded = computed(
      () => props.expanded && (state.expandedMap[idPanel] || false) && body.value.hasContent,
    )

    const toggle = (): void => {
      if (!body.value.hasContent) return

      togglePanel(idPanel)
    }

    const collapse = (element: HTMLElement): void => {
      element.style.height = '0'
    }

    const expand = (element: HTMLElement): void => {
      element.style.height = `${element.scrollHeight}px`
    }

    const updateBodyHeight = async(): Promise<void> => {
      await nextTick()

      if (!bodyRef.value || !bodyContentRef.value) return

      bodyRef.value.style.height = `${Math.min(bodyContentRef.value.scrollHeight, bodyRef.value.scrollHeight)}px`
    }

    onMounted(() => {
      state.expandedMap[idPanel] = props.expanded
    })

    onUpdated(() => {
      updateBodyHeight()
    })

    return {
      body,
      bodyRef,
      bodyContentRef,
      isExpanded,
      collapse,
      expand,
      toggle,
      toggleIcon,
    }
  },
})
</script>

<style lang="scss" scoped>
  .vcp {
    $root: &;
    $timing-function: cubic-bezier(.5, .25, 0, 1);

    &__header {
      display: flex;
      padding: 12px;
      pointer-events: none;

      #{$root}--expandable & {
        pointer-events: auto;
        cursor: pointer;
      }
    }

    &__header-title {
      display: flex;
      align-items: center;
      flex: 1;
    }

    &__header-icon {
      display: flex;
      align-items: center;
      transition: transform .3s $timing-function;

      #{$root}--expanded & {
        transform-origin: center;
        transform: rotate(180deg);
      }

      > span {
        display: flex;
        height: 24px;
        width: 24px;
      }

      ::v-deep(svg) {
        height: 100%;
        width: 100%;
      }
    }

    &__body {
      overflow: hidden;
      transition: all .3s $timing-function;
    }

    &__body-content {
      padding: 12px;
    }
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: .25;
  }
</style>

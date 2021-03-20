<template>
  <div class="vcpg">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
} from 'vue'
import { enableAccordion } from '@/components/composables/vue-collapsible-panel.store'

export default defineComponent({
  name: 'VueCollapsiblePanelGroup',
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    onMounted(() => {
      if (props.accordion) enableAccordion()
    })
  },
})
</script>

<style lang="scss" scoped>
  $base-color: #333;
  $border-color: lighten($base-color, 65);
  $bg-color-header: lighten($base-color, 75);
  $bg-color-header-hover: lighten($base-color, 70);
  $bg-color-header-active: lighten($base-color, 65);
  $shadow-color: lighten($base-color, 65);

  .vcpg {
    border: 1px solid $border-color;
    border-radius: 4px;
    color: lighten($base-color, 5);
    box-shadow: $shadow-color 0 0 16px 0;
    width: 100%;

    ::v-deep(.vcp) {
      * {
        box-sizing: border-box;
      }

      &__header {
        background-color: $bg-color-header;
        height: 46px;
        transition: background-color .3s ease;

        &:not(:first-of-type) {
          border-top: 10px solid red;
        }

        &:hover {
          background-color: $bg-color-header-hover;
        }

        &:active {
          background-color: $bg-color-header-active;
        }
      }

      &:not(:first-of-type) {
        .vcp__header {
          border-top: 1px solid $border-color;
        }
      }

      &__header-title {
        font-weight: 500;
      }

      &__body {
        border-top: 1px solid $border-color;
      }
    }
  }
</style>

<template>
  <VueCollapsiblePanelGroup>
    <VueCollapsiblePanel>
      <template #title>
        TITLE
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat. Nam massa enim, mattis vitae risus in, sagittis placerat sapien. Maecenas vitae ligula et turpis hendrerit hendrerit. Nullam dapibus, ex quis ultrices feugiat, diam nunc mollis ligula, at semper orci nunc quis purus. In tristique justo sit amet dictum malesuada. Fusce sit amet vestibulum augue, eu venenatis urna. Sed gravida lorem luctus mauris sodales, eget interdum velit gravida. Maecenas posuere vulputate tincidunt. Maecenas ultricies quis dolor et sodales. Mauris aliquet neque nisl, sit amet aliquam ipsum interdum a. Integer semper fringilla orci, in sollicitudin neque molestie sit amet. Vivamus auctor urna eu velit pretium dictum.
        <div
          v-for="item in testData"
          :key="item"
        >
          Item {{ item + 1 }}
        </div>
      </template>
    </VueCollapsiblePanel>

    <VueCollapsiblePanel>
      <template #title>
        TITLE
      </template>
      <template #content>
        <div
          v-for="item in testData"
          :key="item"
        >
          Item {{ item + 1 }}
        </div>
      </template>
    </VueCollapsiblePanel>

    <VueCollapsiblePanel>
      <template #title>
        TITLE
      </template>
      <template #content>
        <div
          v-for="item in testData"
          :key="item"
        >
          Item {{ item + 1 }}
        </div>
      </template>
    </VueCollapsiblePanel>

    <VueCollapsiblePanel>
      <template #title>
        TITLE
      </template>
      <template #content>
        <div
          v-for="item in testData"
          :key="item"
        >
          Item {{ item + 1 }}
        </div>
      </template>
    </VueCollapsiblePanel>

    <VueCollapsiblePanel>
      <template #title>
        TITLE
      </template>
      <template #content>
        <div
          v-for="item in testData"
          :key="item"
        >
          Item {{ item + 1 }}
        </div>
      </template>
    </VueCollapsiblePanel>
  </VueCollapsiblePanelGroup>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueCollapsiblePanelGroup from '@/components/VueCollapsiblePanelGroup.vue'
import VueCollapsiblePanel from '@/components/VueCollapsiblePanel.vue'

export default defineComponent({
  name: 'App',
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  setup() {
    const testData = ref([1])

    setInterval(() => {
      const rand = Math.floor(Math.random() * (10 + 1))
      console.log(rand)
      testData.value = [...Array(rand).keys()]
    }, 20000)

    return {
      testData,
    }
  },
})
</script>

<style lang="scss">
  .vcpg {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    max-width: 600px;
    margin: 100px auto;
  }
</style>

<template>
  <div class="wrapper">
    <vue-collapsible-panel-group>
      <vue-collapsible-panel>
        <template #title>
          Panel A
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat. Nam massa enim, mattis vitae risus in, sagittis placerat sapien. Maecenas vitae ligula et turpis hendrerit hendrerit.
        </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel>
        <template #title>
          Panel B
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat. Nam massa enim, mattis vitae risus in, sagittis placerat sapien. Maecenas vitae ligula et turpis hendrerit hendrerit.
        </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel>
        <template #title>
          Panel C
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat. Nam massa enim, mattis vitae risus in, sagittis placerat sapien. Maecenas vitae ligula et turpis hendrerit hendrerit.
        </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>

    <vue-collapsible-panel-group
      accordion
      base-color="#111111"
    >
      <vue-collapsible-panel>
        <template #title>
          Panel A
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat. Nam massa enim, mattis vitae risus in, sagittis placerat sapien. Maecenas vitae ligula et turpis hendrerit hendrerit.
        </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          Panel B
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat. Nam massa enim, mattis vitae risus in, sagittis placerat sapien. Maecenas vitae ligula et turpis hendrerit hendrerit.
        </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          Panel C
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat. Nam massa enim, mattis vitae risus in, sagittis placerat sapien. Maecenas vitae ligula et turpis hendrerit hendrerit.
        </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueCollapsiblePanelGroup from '@/components/VueCollapsiblePanelGroup.vue'
import VueCollapsiblePanel from '@/components/VueCollapsiblePanel.vue'

export default defineComponent({
  name: 'App',
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
})
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    max-width: 1200px;
    height: 100vh;
  }

  .vcpg {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    max-width: 500px;
    margin: 180px auto;
    color: #333;
  }
</style>

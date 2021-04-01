<template>
  <div>
    <h1>@dafcoe/vue-collapsible-panel</h1>

    <div class="dashboard">
      <vue-collapsible-panel-group>
        <vue-collapsible-panel>
          <template #title>
            Panel A
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat.
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel>
          <template #title>
            Panel B
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat.
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel>
          <template #title>
            Panel C
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat.
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Panel B
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat.
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Panel C
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis purus quis leo efficitur, egestas varius justo rhoncus. Nunc a pulvinar metus. Nunc mollis viverra varius. Fusce varius nunc ante, eget congue sem tristique sagittis. Aliquam erat volutpat.
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>

    <div class="bottom-links">
      <a
        href="https://github.com/dafcoe/vue-collapsible-panel"
        target="_blank"
      >
        <span
          v-html="icons.github"
          class="bottom-link--github"
        />
      </a>
      <a
        href="https://www.npmjs.com/package/@dafcoe/vue-collapsible-panel"
        target="_blank"
      >
        <span
          v-html="icons.npm"
          class="bottom-link--npm"
        />
      </a>
    </div>
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
  setup() {
    const icons = {
      github: `
        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      `,
      npm: `
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <g>
              <rect width="24" height="24" opacity="0"/>
              <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/>
          </g>
        </svg>
      `,
    }

    return { icons }
  },
})
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: #333;
    background: url("https://www.transparenttextures.com/patterns/black-orchid.png"), linear-gradient(to right, #fc4a1a, #f7b733);
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    margin-top: -40px;
    text-align: center;
    color: white;
    font-weight: 300;
    font-size: 64px;
  }

  .dashboard {
    display: flex;
    align-items: flex-start;

    .vcpg {
      margin: 0 10px;
      width: 500px;
    }
  }

  .bottom-links {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: inline-block;
      margin: 0 10px;
      color: white;
      text-decoration: none;
      opacity: .75;
      transition: opacity .25s ease-in-out;

      &:hover {
        opacity: 1;
      }

      span {
        display: inline-flex;
        height: 42px;
        width: 42px;

        &.bottom-link--github {
          margin-top: -5px;
          padding: 5px;
        }
      }

      svg {
        height: 100%;
        width: 100%;
      }
    }

    :visited {
      color: white;
    }
  }
</style>

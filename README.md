![@dafcoe/vue-collapsible-panel sample](https://github.com/dafcoe/vue-collapsible-panel/blob/main/src/assets/images/sample.gif?raw=true)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dafcoe/vue-collapsible-panel)
![npm](https://img.shields.io/npm/dt/@dafcoe/vue-collapsible-panel?style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dafcoe/vue-collapsible-panel?style=flat-square)

# @dafcoe/vue-collapsible-panel
Easy to use, customizable collapsible panel / accordion library built using Vue3.

## Installation
Install the package as a project dependency using `yarn` or `npm`:
```
$ yarn add @dafcoe/vue-collapsible-panel

--- or ---

$ npm install --save @dafcoe/vue-collapsible-panel
```

## Usage
Import `VueCollapsiblePanelGroup` and `VueCollapsiblePanel` components, either globally (on your main.js / main.ts file) or locally (on your component):
```js
// Globally
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
const app = createApp(App)
app.use(VueCollapsiblePanel).mount('#app')

// Locally
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
```

Import default styles (optional - you can define your own styling):
```js
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
```

Use it in the template as follows:
```html
<vue-collapsible-panel-group>
    <vue-collapsible-panel>
        <template #title>
            Panel A Title
        </template>
        <template #content>
            Panel A Content
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel>
        <template #title>
            Panel B Title
        </template>
        <template #content>
            Panel B Content
        </template>
    </vue-collapsible-panel>
    ...
</vue-collapsible-panel-group>
```

## Options
#### Accordion
By default, the accordion behaviour is not used. To use it, add the `accordion` on `vue-collapsible-panel-group`:
```html
<vue-collapsible-panel-group accordion>
    ...
</vue-collapsible-panel-group>
```

#### Expanded
By default, all the panels are expanded. To prevent this, add `:expanded="false"` on `vue-collapsible-panel`:
```html
<vue-collapsible-panel-group>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Panel A Title
        </template>
        <template #content>
            Panel A Content
        </template>
    </vue-collapsible-panel>
    ...
</vue-collapsible-panel-group>
```

#### Colors
The default base hex color is `#333`. To change this, add `base-color="#<color>"` on `vue-collpasible-panel-group`:
```html
<vue-collapsible-panel-group base-color="#0035a0">
    ...
</vue-collapsible-panel-group>
```
For granular control over the colors, the following css variables can be overridden:
````css
--base-color
--border-color
--bg-color-header
--bg-color-header-hover
--bg-color-header-active
````

## License
[MIT License](https://opensource.org/licenses/MIT) © [Daf Coe](mailto:dafcoe@gmail.com)

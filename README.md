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
<VueCollapsiblePanelGroup>
    <VueCollapsiblePanel>
        <template #title>
            Panel A Title
        </template>
        <template #content>
            Panel A Content
        </template>
    </VueCollapsiblePanel>
    <VueCollapsiblePanel>
        <template #title>
            Panel B Title
        </template>
        <template #content>
            Panel B Content
        </template>
    </VueCollapsiblePanel>
    ...
</VueCollapsiblePanelGroup>
```

## Options
#### Accordion
By default, the accordion behaviour is not used. To use it, add the `accordion` on `VueCollapsiblePanelGroup`:
```html
<VueCollapsiblePanelGroup accordion>
    ...
</VueCollapsiblePanelGroup>
```

#### Expanded
By default, all the panels are expanded. To prevent this, add `:expanded="false"` on `VueCollapsiblePanel`:
```html
<VueCollapsiblePanelGroup>
    <VueCollapsiblePanel :expanded="false">
        <template #title>
            Panel A Title
        </template>
        <template #content>
            Panel A Content
        </template>
    </VueCollapsiblePanel>
    ...
</VueCollapsiblePanelGroup>
```

#### Colors
The default base hex color is `#333`. To change this, add `base-color="#<color>"` on `VueCollpasiblePanelGroup`:
```html
<VueCollapsiblePanelGroup base-color="#0035a0">
    ...
</VueCollapsiblePanelGroup>
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

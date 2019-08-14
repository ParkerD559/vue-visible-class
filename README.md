Use to add a class when an element becomes positioned in the viewport. Made to easily incorporate animate.css transitions on scroll, but I'm sure other use cases exist.

# Installation

```
npm install vue-visible-class
```

# Usage

```
// plugins.js
import Vue from 'vue';
import VueVisibleClass from 'vue-visible-class';

Vue.use(VueVisibleClass, {
  directiveName: 'visible-class',  // String, optional, name for directive, default: 'visible-class'
  globalClass: 'animated',  // String or String[], optional, class to add for all elements with directive when scrolled
})

// SomeComponent.vue
<template>
  <div
    v-visible-class="'fadeInLeft'"  <!--  undefined, String, or String[]  -->
    class="container"
  >
    Container content!
  </div>
</template>
```

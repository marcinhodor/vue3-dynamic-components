<template>
  <component :is="layout">
    <router-view @layoutChange="handleLayoutChange"/>
  </component>
</template>

<script>
import { shallowRef } from 'vue'

export default {
  setup() {
    const layout = shallowRef('div')
    const handleLayoutChange = (component) => {
      layout.value = component
    }

    return {layout, handleLayoutChange}
  }
}
</script>

<style>
</style>
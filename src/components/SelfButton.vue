<template>
  <div><button>self-button</button></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const SlefButton = defineComponent({
  name: 'SlefButton',
  data() {
    return {
      pageName: 'About',
      author: 'author'
    }
  },
  methods: {
    caculatePageName() {
      this.pageName.split(',')
    }
  }
})
export default SlefButton
</script>

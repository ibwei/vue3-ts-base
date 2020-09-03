<template>
  <div>{{ author }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const TestDemo = defineComponent({
  name: 'TestDemo',
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
export default TestDemo
</script>

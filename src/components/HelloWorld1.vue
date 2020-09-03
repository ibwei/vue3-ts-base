<template>
  <div>{{ author }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const HelloWorld1 = defineComponent({
  name: 'hello',
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

export default HelloWorld1
</script>

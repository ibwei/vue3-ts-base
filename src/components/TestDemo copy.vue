<template>
  <div ref="root" class="hello">
    <p>{{ p }}</p>
  </div>
</template>

<script lang="ts">
import './HelloWorld.css'
import { defineComponent, ref } from 'vue'

interface Prop {
  name: string
}

const TestDemo = defineComponent({
  name: 'TestDemo',
  setup(props: Prop) {
    const root = ref(null)
    console.log(props)
    const p = ref(33)
    return {
      p,
      root
    }
  },
  data() {
    return {
      pageName: 'About',
      author: 'kk'
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

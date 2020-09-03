<template>
  <div ref="root" class="about">
    <p>about-me</p>
    <test-demo />
    <self-button />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import TestDemo from '@/components/TestDemo.vue'
import SelfButton from '@/components/SelfButton.vue'

const AboutMe = defineComponent({
  setup() {
    onMounted(() => {
      console.log('mounted is creatd')
    })
    const root = ref(null)
    return { root }
  },
  components: {
    TestDemo,
    SelfButton
  },
  data() {
    return {
      book: {
        pageName: 'Chapter 1',
        author: 'swift'
      }
    }
  },
  methods: {
    caculatePageName(): string {
      return this.book.pageName.split('-').reverse().join()
    }
  }
})

export default AboutMe
</script>

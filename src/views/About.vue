<template>
  <div ref="root" class="about">
    <h1>{{ c }}</h1>
    <h2>{{ b.pageName }}</h2>
    <hello-world />
    <test-demo />
    <router-link to="/about/me">kjfkjsk</router-link>
    <router-view />
    <self-button />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TestDemo from '../components/TestDemo.vue'
import HelloWorld from '../components/HelloWorld.vue'
import SelfButton from '../components/SelfButton.vue'

const About = defineComponent({
  setup() {
    const c = ref(0)
    const root = ref(null)
    return { root, c }
  },
  components: {
    TestDemo,
    HelloWorld,
    SelfButton
  },
  data() {
    return {
      b: {
        pageName: 'About',
        author: 'kk'
      }
    }
  },
  conputed: {
    fullName() {
      return this.b.pageName + this.b.author
    }
  },
  watch: {
    fullName(newName) {
      console.log(newName)
    }
  },
  methods: {
    caculatePageName() {
      this.b.pageName.split(',')
    }
  }
})

export default About
</script>

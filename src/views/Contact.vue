<template>
  <div>
    <hello-world />
    <hello-world1 />
  </div>
</template>

<script lang="ts">
// import HelloWorld from '@/components/HelloWorld1.vue' // @ is an alias to /src
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import HelloWorld1 from '../components/HelloWorld1.vue'

const Home = defineComponent({
  components: {
    HelloWorld,
    HelloWorld1
  },
  hello() {
    console.log('hahha')
    return 'nihao'
  }
})

export default Home
</script>

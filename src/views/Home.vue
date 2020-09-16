<template>
  <div>
    <span class="hello">hahahah</span>
    <hello-world msg="home" />
    <full-loading :show="true" text="hehhe" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld1.vue' // @ is an alias to /src

const Home = defineComponent({
  components: {
    HelloWorld
  },
  created() {
    console.log('routerList', this.$route)
    console.log(this)
  },
  methods: {
    hello() {
      console.log('hahha')
      return 'nihao'
    }
  }
})

export default Home
</script>

<style scoped lang="less">
.hello {
  color: red;
  font-size: 20px;
  &-test {
    color: #ff0000;
  }
}
</style>

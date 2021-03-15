<template>
  <div>home.page</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const Home = defineComponent({
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

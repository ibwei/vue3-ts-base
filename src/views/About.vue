<template>
  <div ref="root" class="about">about.page</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'

const About = defineComponent({
  setup() {
    onMounted(() => {
      console.log('mounted')
    })
    const state = { name: 'init' }
    const state1 = reactive({
      name: '1111'
    })
    const changeState = () => {
      state.name = 'hahahah'
      state1.name = 'chageddddd'
      console.log(state)
    }
    const c = ref(0)
    const root = ref(null)
    return { root, c, state, changeState, state1 }
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

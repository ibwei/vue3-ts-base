import { defineComponent, reactive } from 'vue'
import style from './tsxpage.module.less'
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'tsx test page'
    })

    const getName = () => {
      alert(state.name)
    }

    const dom = <div>dom gragement test</div>

    return () => (
      <>
        <div class={style.tsx} onClick={getName}>
          <span>css test:color shoule be green</span>
          {dom}
          <h1 class={style.title}>This is an {state.name}</h1>
        </div>
      </>
    )
  }
})

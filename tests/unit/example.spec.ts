import { expect, assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ImageDisplay from '@/components/ImageDisplay.vue'
import Home from '@/views/Home.vue'

const globalContext = globalThis as any
if (typeof globalContext.SVGElement === 'undefined') {
  globalContext.SVGElement = globalContext.Element
}

describe('Home.vue', () => {
  it('renders the home page and exposes the sample method', () => {
    const wrapper = shallowMount(Home)

    expect(wrapper.text()).to.include('home.page')
    expect((wrapper.vm as any).hello()).to.equal('nihao')
  })
})

describe('ImageDisplay.vue', () => {
  const list = [
    {
      icon: '/first-icon.png',
      title: 'First',
      image: '/first-image.png'
    },
    {
      icon: '/second-icon.png',
      title: 'Second',
      image: '/second-image.png'
    }
  ]

  it('renders the active image and updates it on hover', async () => {
    const wrapper = shallowMount(ImageDisplay, {
      props: { list }
    })

    expect(wrapper.find('.img').attributes('src')).to.eq('/first-image.png')

    await wrapper.findAll('.r-list-item')[1].trigger('mouseenter')

    expect(wrapper.find('.img').attributes('src')).to.eq('/second-image.png')
  })
})

describe('基本的测试用例', () => {
  it('expect检测基本用例是否正确', () => {
    const foo = 'bar',
      beverages = { tea: ['chai', 'matcha', 'oolong'] }
    expect(foo).to.be.a('string')
    expect(foo).to.equal('bar')
    expect(foo).to.have.lengthOf(3)
    expect(beverages)
      .to.have.property('tea')
      .with.lengthOf(3)
  })
  it('asset检测基本用例是否正确', () => {
    const foo = 'bar',
      beverages = { tea: ['chai', 'matcha', 'oolong'] }
    assert.typeOf(foo, 'string') // without optional message
    assert.typeOf(foo, 'string', 'foo is a string') // with optional message
    assert.equal(foo, 'bar', 'foo equal `bar`')
    assert.lengthOf(foo, 3, 'foo`s value has a length of 3')
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea')
  })
})

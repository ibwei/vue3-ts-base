import { expect, assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})

describe('基本的测试用例', () => {
  it('expect检测基本用例是否正确', () => {
    const foo = 'bar',
      beverages = { tea: ['chai', 'matcha', 'oolong'] }
    expect(foo).to.be.a('string')
    expect(foo).to.equal('bar')
    expect(foo).to.have.lengthOf(3)
    expect(beverages).to.have.property('tea').with.lengthOf(3)
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

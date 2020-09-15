# 单元测试使用检查说明

- [@vue/cli-plugin-unit-mocha](https://cli.vuejs.org/core-plugins/unit-mocha.html#injected-commands)
- [chai](http://chaijs.com/)

## 测试用例常用方法

> should 和 expect 是 TDD(Test-Driven Development)——测试驱动开发，assert BDD(Behavior-Driven Development)——行为驱动开发

### 连接器

- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- of
- same
- but
- does
- still

### 断言

- .not
- .deep
- nested
- own
- ordered
- any
- all
- a
- include
- ok
- true
- false

### asset

- [asset](https://www.chaijs.com/api/assert/)

## 测试用例 demo

- should

```javascript
chai.should()
foo.should.be.a('string')
foo.should.equal('bar')
foo.should.have.lengthOf(3)
tea.should.have.property('flavors').with.lengthOf(3)
```

- expect

```javascript
var expect = chai.expect
expect(foo).to.be.a('string')
expect(foo).to.equal('bar')
expect(foo).to.have.lengthOf(3)
expect(tea).to.have.property('flavors').with.lengthOf(3)
```

- Assert

```javascript
var assert = chai.assert

assert.typeOf(foo, 'string')
assert.equal(foo, 'bar')
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors')
assert.lengthOf(tea.flavors, 3)
```

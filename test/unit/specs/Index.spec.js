import Vue from 'vue'
import App from '@/modules/index/App'

describe('module Index App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1.index').textContent)
      .to.equal('This is Index module!')
  })
})

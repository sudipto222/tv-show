import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Home.data).toBe('function')
    })
  })

  describe('Home', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Home.mounted).toBe('function')
    })
  })

  describe('Home', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Home.methods.searchShow).toBe('function')
    })
  })

  describe('Mounted Home', () => {
    const wrapper = mount(Home);
  
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })

  // it's also easy to check for the existence of elements
it('has a button', () => {
    const wrapper = mount(Home);
    expect(wrapper.contains('button')).toBe(true)
  })

describe('Home', () => {
it('search for an input', () => {
const Constructor = Vue.extend(Home);
const HomeComponent = new Constructor().$mount();

HomeComponent.newItem = 'girls';

const button = HomeComponent.$el.querySelector('button');
const clickEvent = new window.Event('click');
button.dispatchEvent(clickEvent);
HomeComponent._watcher.run();

expect(Array.isArray(['searchResult'])).toBe(true);
})
})
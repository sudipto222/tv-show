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
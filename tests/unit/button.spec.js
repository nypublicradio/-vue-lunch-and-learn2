import { shallowMount } from '@vue/test-utils'
import VButton from '@/components/VButton.vue'
import AudioIcon from '@/components/AudioIcon.vue'

describe('VButton.vue', () => {

  it('renders props.label when passed', () => {
    const label = 'new message'
    const wrapper = shallowMount(VButton, {
      propsData: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })

  it('renders props.href when passed', () => {
    const href = 'http://www.test.com'
    const wrapper = shallowMount(VButton, {
      propsData: { href }
    })
    expect(wrapper.props('href')).toMatch(href)
  })

  it('slot works', () => {
    const wrapper = shallowMount(VButton, {
      slots: {
        default: AudioIcon
      }
    })
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
})

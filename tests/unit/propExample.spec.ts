import { mount } from '@vue/test-utils'
import PropsExample from '@/components/PropsExample.vue'

describe('PropsExample.vue',()=>{
    it('The component recieves and show the title and the content props',()=>{
        const wrapper = mount(PropsExample,{
            props:{
                title: 'Hello World!',
                content: 'Lorem ipsum dolor sit amet'
            }
        })

        if (expect(wrapper.find('h1').exists())) expect(wrapper.find('h1').text()).toBe('Hello World!')

        if (expect(wrapper.find('p').exists())) expect(wrapper.find('p').text()).toBe('Lorem ipsum dolor sit amet')
        
    })

    it('The component emits the counter value', async ()=>{
        const wrapper = mount(PropsExample,{
            props:{
                title: 'Hello World!',
                content: 'Lorem ipsum dolor sit amet'
            }
        })

        await wrapper.find('button').trigger('click')

        //console.log(wrapper.emitted())
        //console.log(wrapper.emitted().clickMe[0])
        const emitted = wrapper.emitted() as Record<string, any[]>;
        expect(emitted.clickMe[0][0]).toBe(1)

    })
})
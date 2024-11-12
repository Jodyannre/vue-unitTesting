import { shallowMount, mount } from "@vue/test-utils"
import App from "@/App.vue"

describe("App.vue", () => {
    it("The component render the initial value", ()=> {
        // Lo monta de manera aislada
        //const wrapper = shallowMount(App)
        // Lo monta con todos los componentes hijos o los componentes dependientes
        const wrapper = mount(App)

        // Conseguir componentes hijos
        // wrapper.findComponent({name: "ComponentName"})
        // wrapper.findComponent(component)
        // wrapper.findComponent(#component_id)

        if (expect(wrapper.find("h3").exists())) {
            expect(wrapper.find('h3').text()).toBe("0")
        }
        
        if (expect(wrapper.find("button").exists())) {
            expect(wrapper.find("button").text()).toBe("Increment")
        }
        
    })

    it("The increment button adds ones to the counter", async ()=>{
        const wrapper = mount(App)

        await wrapper.find("button").trigger("click")

        expect(wrapper.find("h3").text()).toBe("1")
    })
})
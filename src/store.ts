import { createStore } from 'vuex';

// Store modules 
import headerModule from '@/modules/module-header';
import homeModule from '@/modules/module-home';
import kitchenModule from '@/modules/module-kitchen';
import bathroomModule from '@/modules/module-bathroom';
import newbuildModule from '@/modules/module-newbuild';
import extensionModule from '@/modules/module-extension';
import refurbishmentModule from '@/modules/module-refurbishment';
import contactModule from '@/modules/module-contact';
import aboutModule from '@/modules/module-about';
import footerModule from '@/modules/module-footer';

// Main store
const store = createStore({
    state: () => ({
        textualData: {}
    }),
    getters: {
        getTextualData(state) {
            return state.textualData;
        }
    },
    mutations: {
        setTextualData(state, data) {
            state.textualData = data;
        },
        setTextualDataInitial(state, data) {
            fetch('https://tpw-development-default-rtdb.firebaseio.com/textualData.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data })
            })
        }
    },
    actions: {},
    modules: {
        headerModule,
        homeModule,
        kitchenModule,
        bathroomModule,
        newbuildModule,
        extensionModule,
        refurbishmentModule,
        contactModule,
        aboutModule,
        footerModule
    }
});

export default store;
/*
    state
    getters
    mutations
    actions
    modules
*/

import cart from './modules/cart.js'

export default {
    state() {
        return {
            navigation: {
                visible: false,
                pages: [
                    { title: 'About us', id: 'about-us'},
                    { title: 'Careers', id: 'careers'},
                ]
            },
            
            
        }
    },
    /* 
        GETTERS
        this.$store.getters.navn
        this.$store.getters['navn']
    */
    getters: {
        getPages(state) {
            return state.navigation.pages;
        }
    },

    /*
        MUTATIONS (sync)
         - commit mutation

         this.$store.commit('navn', data);
    */

    mutations: {
        addPage(state, page) {
            state.navigation.pages.push(page)
        },
    },

    /*
        ACTIONS (async)
        - dispatch action
        - action -> mutation
        
        this.$store.dispatch('navn')
    */
   actions: {
        /*
        fetchFromServer(context) {
            fetch('/api').then(data => {
                context.commit.addPages(data)
            })   
        }*/
   },

   /*
        MODULES
   */
    modules: {
        cart
    }
}
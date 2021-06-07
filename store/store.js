export const state = () => ({
    tdee: '',
    system: ''
})

export const mutations = {
    setStateTdee(state,payload){
        state.tdee = payload
    },
    setStateSystem(state,payload){
        state.system = payload
    }
}

export const actions = {
    setTdee(context,payload){
        context.commit('setStateTdee',payload)
    },
    setSystem(context,payload){
        context.commit('setStateSystem',payload)
    }

}

export const getters = {
    getTdee(state){
        return state.tdee
    },
    getSystem(state){
        return state.system
    }
}
import stocks from '../../data/stocks'

const state = {
    stocks: [],
    showOverlay: false,
}

const getters = { 
    stocks(state) {
        return state.stocks;
    },
    showOverlay(state) {
        return state.showOverlay
    }
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },

    'RND_STOCKS'(state) { 
        state.stocks.forEach(stock => {
            stock.price = stock.price == 1 ? stock.price + 1 : Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    },

    'SHOW_OVERLAY'(state) {
        state.showOverlay = true;
    },

    'HIDE_OVERLAY'(state) {
        state.showOverlay = false;
    }
}

const actions = { 
    // buyStock({commit}, order) {
    //     commit();
    // },

    initStocks({commit}){
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks({commit}) {
        commit('RND_STOCKS');
    },
    

}

export default {
    state,
    getters,
    mutations,
    actions
}
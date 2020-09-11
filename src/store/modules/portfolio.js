const state = {
    funds: 10000,
    stocks: []
}

const getters = {
    stockPortfolio(state, getters){
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },

    funds(state) {
        return state.funds;
    }
}

const mutations = {
    'BUY_STOCKS'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record) {
            record.quantity += +quantity
        }
        else {
            state.stocks.push({
                id: stockId,
                quantity: quantity,
            });
        }
        state.funds -= quantity * stockPrice;
    },

    'SELL_STOCKS'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += quantity * stockPrice;
    },

    'SET_PORTFOLIO'(state, payload) {
        
            state.funds = payload.funds;
            state.stocks =  payload.stockPortfolio ? payload.stockPortfolio : []
       
    }
}

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCKS', order);
    },
    buyStock({commit}, order) {
        commit('BUY_STOCKS', order);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
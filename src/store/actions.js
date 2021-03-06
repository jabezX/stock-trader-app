import Vue from 'vue'

export const loadData = ({commit}) => {
    commit('SHOW_OVERLAY');
    Vue.http.get('data.json').then( (response) => {
        const returnedData = response;
        commit('HIDE_OVERLAY');
        return returnedData.json();})
        .then(
        data => {
            if(data){
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                }

                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', portfolio)
            }
        }
    )
    
}
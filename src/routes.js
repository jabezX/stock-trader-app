import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import Stock from './components/stocks/Stock.vue'
import PortfolioStock from './components/portfolio/Stock.vue'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/stocks', 
        component: Stocks
    },
    {
        path: '/stocks/stock',
        component: Stock
    },
    {
        path: '/portfolio/stock',
        component: PortfolioStock
    },
    {
        path: '*',
        component: Home
    }
];

import VueRouter from 'vue-router';
import Home from './pages/Home';
import ItemsList from './pages/ItemsList';
import Item from './pages/Item';
import ErrorComponent from './pages/Error';

export default new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '',
                component: Home,
                name: 'home',
            },
            {
                path: '/accounts',
                component: ItemsList,
                name: 'accounts',
            },
            {
                path: '/accounts/hoard-:id',
                component: Item,
                name: 'Hoard-:id',
            },
            {
                path: '*',
                component: ErrorComponent
            }

        ],
        scrollBehavior: function(to) {
            if (to.hash) {
                return {selector: to.hash}
            } else {
                return { x: 0, y: 0 }
            }
        },
    }
)

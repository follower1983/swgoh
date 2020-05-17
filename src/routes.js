import VueRouter from 'vue-router';
import Home from './pages/Home';
import ItemsList from './pages/ItemsList';
import Item from './pages/Item';
import ErrorComponent from './pages/Error';

export default new VueRouter({
        routes: [
            {
                path: '', // localhost:8080 (domain)
                component: Home
            },
            {
                path: '/accounts', // localhost:8080/accounts (domain)
                component: ItemsList,
                // children: [
                //     {
                //         path: '/accounts/:id',
                //         component: Item
                //     }
                // ]
            },
            {
                path: '/accounts/hoard-:id',
                name: 'item',
                component: Item
            },
            {
                path: '*',
                component: ErrorComponent
            }

        ],
        mode: 'history',
        scrollBehavior: function(to) {
            if (to.hash) {
                return {selector: to.hash}
            } else {
                return { x: 0, y: 0 }
            }
        },
    }
)
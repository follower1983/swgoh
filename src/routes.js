import VueRouter from 'vue-router';
import Home from './pages/Home';
import ItemsList from './pages/ItemsList';
import Item from './pages/Item';
import ErrorComponent from './pages/Error';

export default new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '', // localhost:8080 (domain)
                component: Home,
                name: 'home',
                meta: {
                    title: 'Home'
                }
            },
            {
                path: '/accounts', // localhost:8080/accounts (domain)
                component: ItemsList,
                name: 'accounts',
                meta: {
                    title: 'Accounts'
                }
                // children: [
                //     {
                //         path: '/accounts/:id',
                //         component: Item
                //     }
                // ]
            },
            {
                path: '/accounts/hoard-:id',
                component: Item,
                name: 'Hoard-:id',
                meta: {
                    title: 'Hoard'
                }
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

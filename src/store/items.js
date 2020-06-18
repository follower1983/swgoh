export default {
    state: {
        mainPreloader: true,
        blur: true,
        itemsList: [],
        itemsListLimited: [],
        itemsListLimitedEnd: 10,
        itemDetail: {},
        showLoadMoreBtn: false,
        showModal: false
    },
    mutations: { // MUTATIONS ARE SYNCHRONOUS !!!
        UPDATE_ITEMS(state, items){
            state.itemsList = items
        },
        UPDATE_ITEMS_LIMITED(state, items){
            state.itemsListLimited = items;
        },
        UPDATE_ITEM_DETAIL(state, itemDetail){
            state.itemDetail = itemDetail;
        },
        SET_LOAD_MORE_BTN_TRUE(state){
            state.showLoadMoreBtn = true
        },
        SET_LOAD_MORE_BTN_FALSE(state){
            state.showLoadMoreBtn = false
        },
        SHOW_MORE_ITEMS(state, items){
            if(state.itemsListLimited.length < state.itemsList.length){
                state.showLoadMoreBtn = true;
                state.itemsListLimitedEnd += 10;
                state.itemsListLimited = items.slice(0, state.itemsListLimitedEnd);

                if(state.itemsListLimitedEnd.length >= state.itemsList.length){
                    state.showLoadMoreBtn = false
                }
            }else{
                state.showLoadMoreBtn = false
            }
        },
    },
    actions:{
        async fetchItems({commit}){
            let response = await fetch('https://swgoh.farm/public/unit/list');
            if(response.ok){
                this.itemsList = await response.json(); // initial events amount
                this.itemsListLimited = this.itemsList.slice(0,10); // limited events amount
                commit('UPDATE_ITEMS', this.itemsList);
                commit('UPDATE_ITEMS_LIMITED', this.itemsListLimited);
                commit('SET_LOAD_MORE_BTN_TRUE');
                // eslint-disable-next-line no-console
                // console.log(this.itemsList)
            }else{
                // eslint-disable-next-line no-console
                console.log(response.status);
            }
        },
        async fetchDetail({commit}, accId){
            // accId = 47
            let response = await fetch('https://swgoh.farm/public/unit/' + accId + '/detail');
            if(response.ok){
                this.itemDetail = await response.json();
                commit('UPDATE_ITEM_DETAIL', this.itemDetail);
                // eslint-disable-next-line no-console
                // console.log('============')
                // eslint-disable-next-line no-console
                // console.log(accId)
                // eslint-disable-next-line no-console
                // console.log('============')
            }else{
                // eslint-disable-next-line no-console
                console.log(response.status);
            }
        },
        loadMoreItems({commit}){
            commit('SHOW_MORE_ITEMS', this.itemsList);
        }
    },
    getters:{
        allItems (state){
            return state.itemsList
        },
        getLoadMoreBtn(state){
            return state.showLoadMoreBtn
        },
        allItemsLimited(state){
            return state.itemsListLimited;
        },
        detailItem (state){
            return state.itemDetail
        },
        getPreloaderStatus(state){
            return state.mainPreloader
        },
        getBlurStatus(state){
            return state.blur
        }
    }
}

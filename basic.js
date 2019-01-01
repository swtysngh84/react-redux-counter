const redux=require('redux');
const createStore=redux.createStore;

const initstate={
    counter:0
}

const store=createStore(rootreducer);
store.subscribe(()=>{
    console.log('[subscription] : ',store.getState());
})
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});

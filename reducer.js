
const initstate={
    count:42
};
function reducer(state=initstate,action)
{   switch(action.type)
    {
        case 'INC':
                return({
                    ...state,
                    count:state.count+1
                });
        case 'DEC':
        return({
            ...state,
            count:state.count-1
        }); 
        default :return state;
    }
   
}
export default reducer;

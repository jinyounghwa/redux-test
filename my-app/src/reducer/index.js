
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

const initialState = {
    modal : {
        isShow : false,
    }
}
/**
 * 루트 리듀서 
 * @param {*} state  : 현재 상태
 * @param {*} action  : 액션 객체(함수를 호출하는 실행문)
 * @returns 
 */
const rootReducer = (state = initialState, action) => {
    // state = initalState : set default value for state
    // action : get value from dispatch
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                modal: {
                    isShow: !state.modal.isShow,
                }
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: {
                    isShow: false,
                }
            }
        case OPEN_MODAL:
            return {
                ...state,
                modal: {
                    isShow: true,
                }
            }    
        default:
            return state
    }
}

export default rootReducer;
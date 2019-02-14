const ADD_CURRENT_COMMENT = 'DM/PRODUCT-PAGE/ADD_CURRENT_COMMENT';
const ADD_COMMENT = 'DM/PRODUCT-PAGE/ADD_COMMENT';

// Initial state
let initialState = {
    product: {
        title: "Смартфон Samsung Galaxy S8",
        img: "https://content2.onliner.by/catalog/device/header/272d80e5c1b51824c5034a0dffb29254.jpeg",
        desc: "Android, экран 5.8\" AMOLED (1440x2960), Exynos 8895, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты\n" +
            "памяти, камера 12 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный"
    },
    comments: ['one comment', 'two comment', 'three comment'],
    currentMessage: ''
};


// Reducer
const productPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_COMMENT:
            // debugger
            state.currentMessage = action.message;
            return state;

        case ADD_COMMENT:
            state.comments.push(action.message);
            state.currentMessage = "";
            return state;

        default:
            return state;
    }
};


// Action creator
export const addCurrentCommentActionCreator = (message) => {
    return {
        type: ADD_CURRENT_COMMENT,
        message: message
    }
};

export const addCommentActionCreator = (message) => {
    return {
        type: ADD_COMMENT,
        message: message

    }
};

export default productPageReducer;


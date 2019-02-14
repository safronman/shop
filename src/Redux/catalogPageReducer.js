// Actions
const ADD_CURRENT_IMG = 'DM/CATALOG-PAGE/ADD_CURRENT_IMG';
const ADD_CURRENT_TITLE = 'DM/CATALOG-PAGE/ADD_CURRENT_TITLE';
const ADD_CURRENT_DESC = 'DM/CATALOG-PAGE/ADD_CURRENT_DESC';
const ADD_PRODUCT = 'DM/CATALOG-PAGE/ADD_PRODUCT';

// Initial state
let initialState = {
    products: [
        {
            id: 1,
            img: 'https://content2.onliner.by/catalog/device/header/f05ace8977f07aff539fb4421bc896b2.jpeg',
            title: 'Honor',
            shortDescription: 'Android, экран 5.84" IPS (1080x2280), HiSilicon Kirin 970, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 16 Мп, аккумулятор 3400 мАч, 2 SIM, цвет синий'
        },
        {
            id: 2,
            img: 'https://content2.onliner.by/catalog/device/header/7b809895488980811292228b9885292c.jpeg',
            title: 'Xiaomi',
            shortDescription: 'Android, экран 6.39" AMOLED (1080x2340), Qualcomm Snapdragon 845, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3200 мАч, 2 SIM, цвет черный'
        },
        {
            id: 3,
            img: 'https://content2.onliner.by/catalog/device/header/e62bf283f99f7d3539eac6ab4e859d11.jpeg',
            title: 'Huawei',
            shortDescription: 'Android, экран 5.84" IPS (1080x2280), HiSilicon Kirin 659, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 16 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный'
        },
        {
            id: 4,
            img: 'https://content2.onliner.by/catalog/device/header/a83458571f2c39fc9c435bd1116b4876.jpeg',
            title: 'Iphone',
            shortDescription: 'Apple iOS, экран 5.8" AMOLED (1125x2436), Apple A11 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2716 мАч, 1 SIM, цвет темно-серый'
        }
    ],
    currentProduct: {
        img: '',
        title: '',
        shortDescription: ''
    }
};

const catalogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_TITLE:
            state.currentProduct.title = action.title;
            return state;

        case ADD_CURRENT_IMG:
            state.currentProduct.img = action.img;
            return state;

        case ADD_CURRENT_DESC:
            state.currentProduct.shortDescription = action.text;
            return state;

        case ADD_PRODUCT:
            let newProduct = {
                id: 5,
                img: action.img,
                title: action.title,
                shortDescription: action.desc
            };
            state.products.push(newProduct);
            state.currentProduct.title = "";
            state.currentProduct.shortDescription = "";
            state.currentProduct.img = "";
            return state;

        default:
            return state;
    }
};

// Action creators
export const addCurrentTitleActionCreator = (text) => {
    return {
        type: ADD_CURRENT_TITLE,
        title: text
    }
};

export const addCurrentImgActionCreator = (url) => {
    return {
        type: ADD_CURRENT_IMG,
        img: url
    }
};

export const addCurrentDescActionCreator = (desc) => {
    return {
        type: ADD_CURRENT_DESC,
        text: desc
    }
};

export const addProductActionCreator = (img, title, shortDescription) => {
    return {
        type: ADD_PRODUCT,
        img: img,
        title: title,
        desc: shortDescription

    }
};

export default catalogPageReducer;

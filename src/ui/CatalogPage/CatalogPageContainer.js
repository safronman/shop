import {connect} from "react-redux";
import CatalogPage from "./CatalogPage";
import {
    addCurrentDescActionCreator,
    addCurrentImgActionCreator,
    addCurrentTitleActionCreator,
    addProductActionCreator
} from "../../Redux/catalogPageReducer";

let mapStateToProps = (state) => {
    return {
        catalogPage: state.catalogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCurrentTitle:(currentTitle) => {
            dispatch(addCurrentTitleActionCreator(currentTitle))
        },
        addCurrentImg:(currentImg) => {
            dispatch(addCurrentImgActionCreator(currentImg))
        },
        addCurrentDesc:(currentDesc) => {
            dispatch(addCurrentDescActionCreator(currentDesc))
        },
        addProduct:(img, title, desc) => {
            dispatch(addProductActionCreator(img, title, desc))
        }
    }
};

let CatalogPageContainer = connect(mapStateToProps, mapDispatchToProps)(CatalogPage);

export default CatalogPageContainer;
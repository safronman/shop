import {connect} from "react-redux";
import ProductPage from "./ProductPage";
import {addCommentActionCreator, addCurrentCommentActionCreator} from "../../Redux/productPageReducer";

let mapStateToProps = (state) => {
    return {
        productPage: state.productPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCurrentComment: (currentComment) => {
            dispatch(addCurrentCommentActionCreator(currentComment))
        },
        addComment: (message) => {
            dispatch(addCommentActionCreator(message))
        }
    }
};

let ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;
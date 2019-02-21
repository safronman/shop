import {connect} from "react-redux";
import HomePage from "./HomePage";

let mapStateToProps = (state) => {
    return {
        homePage: state.homePage
    }
};

let HomePageContainer = connect(mapStateToProps)(HomePage);

export default HomePageContainer;
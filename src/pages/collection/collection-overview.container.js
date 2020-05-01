import {connect} from "react-redux"
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spiner/with-spiner.component";
import CollectionsOverview from "../../components/collections-overview/collection-overview.comopnent";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})


const CollectionOverviewContainer =compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview)

export default CollectionOverviewContainer
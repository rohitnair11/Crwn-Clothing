import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import collectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import {CollectionPageContainer} from '../collection/collection.container';
// import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';


class ShopPage extends React.Component {
    // state = {
    //     loading: true
    // };

    // unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState( { loading: false });
        // });
    }

    render() {
        const { match } = this.props;
        // const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={collectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
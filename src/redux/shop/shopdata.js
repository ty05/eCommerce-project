import React, {useState, useEffect} from 'react';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';



const ShopData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            setData(collectionMap)
            // setData(collectionMap)
        })
    },[])


    return(
        {data}
    )
}




export default ShopData;




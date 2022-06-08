import React, {useEffect} from 'react';
import {initialStatePacksType,setPacksTC} from "../../../../_bll/features/cards/packsReducer";
import {useAppDispatch, useCustomSelector} from "../../../../_bll/main/store";
import {Navigate} from "react-router-dom";
import {Pack} from "./pack/Pack";
import styles from "./packs.module.scss";
import {InputComponent} from "./components/InputComponent/InputComponent";

const headerTable = {
    name: "Name",
    cardsCount: "Cards",
    updated: "Last updated",
    user_name: "Created by",
    _id: "_id",
    user_id: "user_id",
    created: "Actions",
    header: true
}


export const Packs = () => {

    const {packParams, cardPacks} = useCustomSelector<initialStatePacksType>(state => state.packs);
    const isLogin = useCustomSelector(state => state.login.isLoggedIn);


    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isLogin) {
            dispatch(setPacksTC({
                ...packParams
            }))
        }
    }, [isLogin, dispatch, packParams]);


    if (!isLogin) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <div className={styles.settings}>
                    Show packs cards <br/>
                    MY ALL <br/>
                    {/*<MultiRangeSlider/>*/}
                </div>
                <div className={styles.packs}>
                    <InputComponent/>
                    <div className={styles.table}>
                        <Pack {...headerTable}/>
                        {cardPacks.map(p => <Pack {...p}/>)}
                    </div>
                    <div className={styles.page}>
                        Pagination <br/>
                    </div>
                </div>
            </div>

        </div>
    );
};
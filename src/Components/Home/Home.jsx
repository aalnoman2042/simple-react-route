import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Hedear/Header';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <div>
                {
                    navigation.state === 'loading' &&'loading....'
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
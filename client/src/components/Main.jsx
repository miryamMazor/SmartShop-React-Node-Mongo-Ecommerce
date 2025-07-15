import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import { Provider } from 'react-redux';
import store from './redux/Reducer';
import ResponsiveAppBar from './appnav';
import { Box } from '@mui/material';


export const Main = () => {
    return <>
    
        <Provider store={store}>
            <BrowserRouter>
                <ResponsiveAppBar></ResponsiveAppBar>

                {/* <ColorSchemesExample></ColorSchemesExample> */}
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    </>
}
export default Main;

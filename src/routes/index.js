import React from 'react';
import {Navigate, Route, Routes} from 'react-router';
// import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import Dashboard from './Dashboard';
import Characters from './Characters';

// export const RestrictedRoute = ({component: Component, ...rest}) => {
//     const {token} = ''
//     // useSelector(({auth}) => auth);
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 token ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate
//                         to={{
//                             pathname: '/signin',
//                             state: {from: props.location},
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// };

const RouterComponent = () => {
    const {token} = ''
    // useSelector(({auth}) => auth);
    // const location = useLocation();

    // if (location.pathname === '' || location.pathname === '/') {
    //     return <Navigate to={'/'}/>;
    // } 
    // else if (token && location.pathname === '/signin') {
    //     return <Navigate to={'/'}/>;
    // }

    return (
        <React.Fragment>
            <Routes>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/comics" element={<Dashboard/>}/>
                <Route path="/creators" element={<Dashboard/>}/>
                <Route path="/events" element={<Dashboard/>}/>
                <Route path="/stories" element={<Dashboard/>}/>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
        </React.Fragment>
    );
};

export default RouterComponent;

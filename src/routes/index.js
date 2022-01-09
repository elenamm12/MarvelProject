import React from 'react';
import {Navigate, Route, Routes} from 'react-router';
// import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import Dashboard from './Dashboard';

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
                {/* <RestrictedRoute path="/dashboard" component={Dashboard}/>
                <RestrictedRoute path="/account" component={Account}/>
                <RestrictedRoute path="/routes" component={RoutesModule}/>
                <RestrictedRoute path="/measurements" component={Measurements}/>
                <RestrictedRoute path="/users" component={UsersModule}/>
                <RestrictedRoute path="/companies" component={CompaniesModule}/>
                <RestrictedRoute path="/sensors" component={SensorsModule}/>
                <RestrictedRoute path="/adminSensors" component={AdminSensorsModule}/>
                <RestrictedRoute path="/tenants" component={TenantsModule}/>
                <RestrictedRoute path="/machine-templates" component={Templates}/>
                <RestrictedRoute path="/component-templates" component={CTemplates}/>
                <RestrictedRoute path="/devices" component={Devices}/> */}
                {/*elements*/}
                {/* <RestrictedRoute path="/pointDashboard/:Id/:create/:edit/:view/:delete/:clone" component={PointModule}/>
                <RestrictedRoute path="/machineDashboard/:Id/:create/:edit/:view/:delete/:clone" component={MachineModule}/>
                <RestrictedRoute path="/componentDashboard/:Id/:create/:edit/:view/:delete/:clone" component={ComponentModule}/>
                <RestrictedRoute path="/locationDashboard/:Id/:create/:edit/:view/:delete/:clone" component={LocationModule}/>

                <RestrictedRoute path="/point/:pointId/measurement/:Id/:delete" component={MeasurementModule}/>
                <Route path="/signin" component={Login}/>
                <Route path="/signup" component={Register}/>
                <Route path="/forgot-password" component={ForgotPasswordPage}/>
                <Route path="/recover-password/:key" component={RecoverPasswordPage}/> */}
                {/* <Route path="/activation/:key" component={ActivateAccount}/> */}
                {/* <Route component={Error404}/> */}
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
        </React.Fragment>
    );
};

export default RouterComponent;

import React, { Suspense } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from '@/containers/Users/Users';

const Pizza = React.lazy(() => {
    return import('@/containers/Pizza/Pizza');
});

const App = () => {
    return (
        <div>
            <div>
                <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
            </div>
            <div>
                <Suspense fallback={<p>Loading...</p>}>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" exact component={Pizza} />
                </Suspense>
            </div>
        </div>
    );
};

export default App;

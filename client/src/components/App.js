import React, { Component } from 'react';

import Header from './Head';
import MyList from './MyList';
import Recommendations from './Recommendations';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <MyList />
                <Recommendations />
            </div>
        )
    }
}




export default App; 
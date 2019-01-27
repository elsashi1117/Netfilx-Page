import React, { Component } from 'react';
import MovieBox from './MovieBox';

class MyList extends Component {
    state = {
        alter: 'recommendations',
        flag: 'mylist',
        button: 'Remove'
    }

    render(){
        return (
            <div className='box'>
                 <h2>My List</h2>
                 <MovieBox flag = {this.state.flag} 
                    alter = {this.state.alter} button = {this.state.button}/>
            </div>
        )
    }
}

export default MyList;

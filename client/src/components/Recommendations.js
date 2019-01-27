import React,{Component} from 'react';
import MovieBox from './MovieBox';

class Recommendations extends Component {
    state = {
        flag: 'recommendations',
        alter: 'mylist',
        button: 'Add'
    }

    render(){
        return (
            <div className='box'>
                 <h2>My Recommendations</h2>
                 <MovieBox flag = {this.state.flag} alter = {this.state.alter} button = {this.state.button}/>
            </div>
        )
    }
}

export default Recommendations;
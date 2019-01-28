import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { getMovie } from '../actions';
import './style.css';


class MovieBox extends Component {

    componentDidMount() {
        this.props.dispatch(actions.getMovie())
        // console.log('componentDidMount')
    }

    ctgChange = (id, newCtg) => {
        // console.log('ctg_change')
        this.props.dispatch(actions.updateMovie(id,newCtg))
    }

    render() {
        console.log(this.props.flag)
        const {flag,alter,button} = this.props
        return (          
                <div className='container'>
                    {this.props.movies.data.map(mv =>
                    
                        mv.category === flag &&
                        <div key={mv._id} className='movie'>
                            <img className='film' src={mv.img} />
                            <button onClick = {()=>this.ctgChange(mv._id, {category:alter})}>{button}</button>
                        </div>
                    )}
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state
    }
}

export default connect(mapStateToProps)(MovieBox);

import React, { Component } from 'react';

class gif extends Component{
    // constructor(props){
    //     super.props;
    //     this.props
    // }
    handleClick = () => {
        if (this.props.selectedGif) {
        this.props.selectedGif(this.props.id);
        }
    }
    render(){
        if (!this.props.id){
            return null;
        }
        const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
        return(
            <img src={src} alt="" className="gif" onClick={this.handleClick}/>
        );
    }
}

export default gif;
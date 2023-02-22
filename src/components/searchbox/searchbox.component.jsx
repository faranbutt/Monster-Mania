import { Component } from "react";

class SearchBox extends Component{
    render(){
        return(
            <div className="flex justify-center">
            <input className={this.props.className} type='search' placeholder='search-monsters' onChange={this.props.onChangeHandler} />
            </div>
        );
    };
}
export default SearchBox;
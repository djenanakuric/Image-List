import React from "react";

class SearchInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {entry:''}
    }

    onFormSubmit = (event) => {
        // da se ne brise kada upisemo u search, odnosno da se stranica ne refresh
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }
    onInputChance(event) {
      console.log(event.target.value)  
    }

    render() {
        return (
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className="ui form" >
                <div className="ui form">
                        <div className="ui massive icon input">
                            <input 
                                type="text" 
                                placeholder="Search..."
                                onChange={(event) => this.setState({entry:event.target.value})}
                                value = {this.state.entry}
                                />
                            <i className="search icon"></i>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;
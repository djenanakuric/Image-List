import React from 'react';
import SearchInput from './SearchInput.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    onSearchSubmit(entry) {
        console.log(entry)
    }

    render() {
    return (
        <div className='ui conteiner' style={{margin:'50px'}}> 
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
        </div>
    )
}
}

export default App;
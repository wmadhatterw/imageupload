import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	render(){
		return (
			<div>
				This is the base react APP!
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementByID('root'))
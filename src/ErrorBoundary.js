import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError : false}
	}

	componentDidCatch(error, info) {
		this.setstate({hasError:true})
	}

	render() {
		if (this.state.hasError) {
			return <h1>Ooops, this is not good</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;
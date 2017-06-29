import React, {Component, PropTypes} from 'react';


class Notification extends Component {

	static propTypes = {
		title: PropTypes.string,
		type: PropTypes.string,
		id: PropTypes.number,
	};

	constructor(props) {
		super(props);

		this.state = {
			canShow: !!this.props.title.length,
		};

		this.hideNotification = this._hideNotification.bind(this);

		this.timer;
	}


	// Components Methods
	//----------------------

	_startTimer() {
		this.timer = window.setTimeout(() => {
			this.setState({canShow: false})
		}, 5000);
	}

	_hideNotification() {
		window.clearTimeout(this.timer);
		this.setState({canShow: false});
	}


	// Lifecycle Methods
	//----------------------

	componentWillReceiveProps(nextProps) {
		if ( (nextProps.id !== this.props.id) && !this.state.canShow) {
			this.setState({canShow:true});
			this._startTimer();
		}
	}

	componentDidMount() {
		if (this.props.title.length) {
			this._startTimer();
		}
	}

	componentWillUnmount() {
		window.clearTimeout(this.timer);
	}

	render() {
		const {
			title,
			type,
			id
		} = this.props;

		const {
			canShow
		} = this.state;

		return (
			<div
				className='notification-container'
				style={canShow ? {bottom:0} : {bottom:'-150px'}}
			>
				<div
					className={`notification ${type}`}
					onClick={this.hideNotification}
				>
					{title}
				</div>
			</div>
		);
	}
}

export default Notification;
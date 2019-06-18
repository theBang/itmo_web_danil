import React, { Component as C }  from 'react';
import { render as r } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'
import moment from 'moment'
import Counter from './Counter';

const f = 'DD.MM.YYYY HH:mm:ss';

class App extends C {
	constructor() {
		super();
		this.state = {
			Day: moment().format('D')
		}
	}
	change(v) {
		this.setState(({ Day }) => ({ Day: v }));
	}
	render() {
		return (<div>
		<Counter stars={ this.state.Day } />
		<DatePicker
			onChange={(n = null, date) => {
					this.change(moment(date).format('D'));
					alert(moment(date).format(f));
				}
			}
			floatingLabelText="Выберите дату!"
		/>
	</div>)
	}
};

r(
  <MuiThemeProvider><App /></MuiThemeProvider>,
  document.querySelector('.cont'),
);

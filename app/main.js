/**
 * Created by Messi on 4/13/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import CheckboxWithLabel from './checkboxWithLabel';

class App extends React.Component {
    render() {
        return (<div>
            <Hello />
            <CheckboxWithLabel labelOn="On" labelOff="Off"/>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));

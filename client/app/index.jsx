import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{id: 1, text: 'hello world'}]
    }
  }
  render() {
    return (
      <div>
        <div>Hello, world!</div>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
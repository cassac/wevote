import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList.jsx';
import ItemEntryCreate from './components/ItemEntryCreate.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{id: 1, text: 'hello world'}]
    }
  }
  submitHandler(e) {
    console.log('submitted:', e);
    e.preventDefault();
    $.ajax({
      'url': '/items',
      'type': 'POST',
      'data': new FormData(e.target),
      contentType: false,
      processData: false
    })
    .done((res) => console.log('res', res))
    .fail((err) => console.log('err', err))
  }
  render() {
    return (
      <div>
        <div>Hello World</div>
        <ItemEntryCreate submitHandler={this.submitHandler.bind(this)}/>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
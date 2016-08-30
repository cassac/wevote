import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList.jsx';
import ItemEntryCreate from './components/ItemEntryCreate.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  updateItems() {
    $.get('/items', (items) => {
      console.log(items)
      this.setState({items: items.results})
    });
  }
  componentDidMount() {
    this.updateItems();
  }
  submitHandler(e) {
    let context = this;
    e.preventDefault();
    $.ajax({
      'url': '/items',
      'type': 'POST',
      'data': new FormData(e.target),
      contentType: false,
      processData: false
    })
    .done((res) => {
      context.updateItems();
      $('form')[0].reset();
    })
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
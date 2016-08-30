import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList.jsx';
import ItemEntryCreate from './components/ItemEntryCreate.jsx';
import NavBar from './components/NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      votes: []
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
    // setInterval(function() {
    //   this.updateItems();
    // }.bind(this), 3000)
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
  clickHandler(e) {
    console.log('clicked')
  }
  render() {
    return (
      <div>
        <NavBar clickHandler={this.clickHandler} />
        <div className='container'>
          <ItemEntryCreate submitHandler={this.submitHandler.bind(this)}/>
          <ItemList items={this.state.items} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
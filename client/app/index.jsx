import React, { Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { render } from 'react-dom';
import ItemList from './components/ItemList.jsx';
import ItemEntryCreate from './components/ItemEntryCreate.jsx';
import NavBar from './components/NavBar.jsx';
import Modal from './components/Modal.jsx';
import UsersPage from './components/UsersPage.jsx';
import UserPage from './components/UserPage.jsx';
import NoMatchPage from './components/NoMatchPage.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      votes: [],
      displayModal: false
    }
  }
  updateItems() {
    $.get('/items', (items) => {
      this.setState({items: items.results})
    });
  }
  updateVotes() {
    $.get('/votes', (votes) => {
      this.setState({votes: votes.results})
    });
  }  
  componentDidMount() {
    this.updateItems();
    this.updateVotes();
    setInterval(function() {
      this.updateItems();
      this.updateVotes();
    }.bind(this), 1000)
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
    let context = this;
    context.setState({
      displayModal: !(this.state.displayModal)
    })
    $('#modal1').openModal();
  }
  render() {
    return (
      <div>
        <NavBar clickHandler={this.clickHandler.bind(this)} />
        <Modal votes={this.state.votes} />
        <div className='container'>
          <ItemEntryCreate submitHandler={this.submitHandler.bind(this)}/>
          <ItemList items={this.state.items} />
        </div>
      </div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="users" component={UsersPage}>
        <Route path="/user/:userId" component={UserPage}/>
      </Route>
      <Route path="*" component={NoMatchPage}/>
    </Route>
  </Router>, 
  document.getElementById('app')
)
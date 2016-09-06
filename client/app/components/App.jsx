import React, { Component } from 'react';
import ItemList from './ItemList.jsx';
import ItemEntryCreate from './ItemEntryCreate.jsx';
import NavBar from './NavBar.jsx';
import Modal from './Modal.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      votes: [],
      displayModal: false
    }
  }
  updateItems() {
    $.get('/api/items', (items) => {
      this.setState({items: items.results})
    });
  }
  updateVotes() {
    $.get('/api/votes', (votes) => {
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
      'url': '/api/items',
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
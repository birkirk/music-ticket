import React, { Component } from 'react';
import './App.css';
import EventBox from './components/EventBox'

const data = {
  name: "Uzo Emenike",
  date: {day: "24", month: "July", time: "18:45"},
  cover: "https://corispelling.files.wordpress.com/2014/07/10168069_619276494813280_3057644114207143083_n.jpg",
  location: {country: "Sydney, Australia", building: "AllPhones Arena"},
  ticketPrice: {currency: "AUD", amount: 189},
  shared: 1287,
}

class App extends Component {
  render() {
    return (
      <EventBox name={data.name} date={data.date} cover={data.cover} location={data.location} ticketPrice={data.ticketPrice} shared={data.shared} />
    );
  }
}

export default App;

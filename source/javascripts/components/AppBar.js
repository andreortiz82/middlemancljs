import React, { Component } from 'react';
import faker from 'faker';

export default class AppBar extends Component {
  render() {
    return (
      <div className="application-navbar">
        <div>
          <div className="logo">LOGO</div>
          <div className="nav-controls nav-left">
            <ul>
              <li>{ faker.lorem.word() }</li>
              <li>{ faker.lorem.word() }</li>
              <li>{ faker.lorem.word() }</li>
            </ul>
          </div>
          <div className="nav-controls nav-right">
            <ul>
              <li>{ faker.lorem.word() }</li>
              <li>{ faker.lorem.word() }</li>
              <li>{ faker.lorem.word() }</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import appActions from './actions/appActions';

class Children extends Component {
  setNewText() {
    this.props.dispatch(appActions.setText('Aquele texto'));
    // Aqui estou habilitando a execução da ação "setText" que criei em "appActions"
  }

  render() {
    return (
      <Fragment>
        <button onClick={() => this.setNewText()}>Mudar texto</button>
      </Fragment>
    );
  }
}

const ChildrenConnected = connect(store => ({ text: store.text }))(Children);
// Aqui estou atribuindo meu componente "Children" à const "ChildrenConnected"

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.text}</h1>
        <ChildrenConnected />
      </Fragment>
    );
  }
  // Em "<ChildrenConnected />" estou habilitando que o button seja renderizado no componente "App"
}

export default connect(store => ({ text: store.text }))(App);
// Aqui estou estabelecendo uma conexão entre o componente "App" e a "store" que estou provendo para essa aplicação

import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Card from '../elements/Card';
import Table from '../elements/Table';

class App extends React.Component {
  render() {
    return (
      <div>
        hello world
        <Table />
        <Card>
          this thing is a card.
        </Card>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);

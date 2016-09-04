import React from 'react';
import { DropTarget } from 'react-dnd';

const spec = {
  drop(props, monitor, component) {
    console.log('drop', props, monitor, component);
  },

  hover(props, monitor, component) {
    console.log('hover', props, monitor, component);
  },

  canDrop(props, monitor) {
    console.log('canDrop', props, monitor);
    return true;
  },
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
};

class Table extends React.Component {
  static propTypes = {
    connectDropTarget: React.PropTypes.func.isRequired,
  }

  render() {
    const connectDropTarget = this.props.connectDropTarget;
    return connectDropTarget(
      <div
        style={{
          border: '1px solid red',
          height: '300px',
          width: '300px',
        }}
      />
    );
  }
}

export default DropTarget(['card'], spec, collect)(Table);

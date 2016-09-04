// Let's make <Card text='Write the docs' /> draggable!

import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text,
    };
  },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const propTypes = {
  children: PropTypes.node,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

class Card extends React.Component {
  render() {
    const { isDragging, connectDragSource, children } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {children}
      </div>
    );
  }
}

Card.propTypes = propTypes;

// Export the wrapped component:
export default DragSource('card', cardSource, collect)(Card);

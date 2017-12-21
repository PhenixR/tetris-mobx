import React from 'react'
import PropTypes from 'prop-types'

const GameStatusButton = ({
  onClickHandler,
  text
}) => (
  <button className="gameStatus-btn" onClick={onClickHandler}>
    { text }
  </button>
)

GameStatusButton.propTypes = {
  onClickHandler: PropTypes.func,
  text: PropTypes.string
}

export default GameStatusButton

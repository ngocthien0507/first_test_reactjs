import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClickBut(props.id)}>
      {props.array.map(item => {
        if (item.id === props.id) {
          return item.char
        }
        else return ""
      })}
    </button>
  );
}

function renderSquare(i, char, array, onClickBut) {
  return <Square id={i} char={char} array={array} onClickBut={onClickBut} />;
}

const Board = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { array: [], char: "X", status: true }
  )
  const { array, char, status } = state

  function onClickBut(id) {
    const dup = array.find(item => item.id === id);
    if (dup === undefined) {
      let a = { id: id, char: char }
      let newarray = array;
      newarray.push(a);
      setState({ array: newarray, char: char === "O" ? "X" : "O", status: !status })
    }
  }

  return (
    <div>
      <div className="status">{status ? 'Next player: X' : 'Next player: O'}</div>
      <div className="board-row">
        {renderSquare(0, char, array, onClickBut)}
        {renderSquare(1, char, array, onClickBut)}
        {renderSquare(2, char, array, onClickBut)}
      </div>
      <div className="board-row">
        {renderSquare(3, char, array, onClickBut)}
        {renderSquare(4, char, array, onClickBut)}
        {renderSquare(5, char, array, onClickBut)}
      </div>
      <div className="board-row">
        {renderSquare(6, char, array, onClickBut)}
        {renderSquare(7, char, array, onClickBut)}
        {renderSquare(8, char, array, onClickBut)}
      </div>
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

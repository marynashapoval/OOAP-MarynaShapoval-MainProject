import React from 'react'
import './App.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class App extends React.Component {
  state = {
    array: Array(5).fill(Array(5).fill(0)),
    max: 0
  }

  generateArrayAndFindMax = () => {
    let newArray = Array(5).fill(0).map(x => (Array(5).fill(0).map(y => getRandomInt(-100, 100))))
    this.setState((state) => (
      { 
        ...state,
        array: newArray,
        max: Math.max.apply(null, newArray.map((row) => Math.max.apply(Math, row)))
      }
    ))
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <h2>Вирішення задачі пошуку максимального елемента у двовимірному масиві, Шаповал М.С. КН-41з</h2>
            <button onClick={this.generateArrayAndFindMax}>
              Згенерувати массив
            </button>
        </div>
        <div>
          {this.state.array.map(x => (<div>{x.map(y => <span>{y} </span>)}<br/></div>))}
        </div>
        <div>
          <h2>Максимальний елемент: </h2>{this.state.max}
        </div>
      </div>
    )
  }
}

export default App;

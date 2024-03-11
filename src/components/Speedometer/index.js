// Write your code here
import Component from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count >= 200) {
        return {count: prevState.count}
      }

      return {count: prevState.count + 10}
    })
  }
  OnApplyBreak = () => {
    this.setState(prevState => {
      if (prevState.count <= 0) {
        return {count: prevState.count}
      }

      return {count: prevState.count - 10}
    })
  }
  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <div className="bottom-section">
          <h1 className="heading">
            Speed is <span>{count}</span>mph
          </h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="button1"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="button2"
              type="button"
              onClick={this.OnApplyBreak}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer

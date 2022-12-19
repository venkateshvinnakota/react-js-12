import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isMode: false}

  onMode = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  buttonText = () => {
    const {isMode} = this.state

    return isMode ? 'Dark Mode' : 'Light Mode'
  }

  containerColor = () => {
    const {isMode} = this.state

    return isMode ? 'lightMode' : 'darkMode'
  }

  headingColor = () => {
    const {isMode} = this.state

    return isMode ? 'headDark' : 'headLight'
  }

  render() {
    const modeText = this.buttonText()
    const colorMode = this.containerColor()
    const headColor = this.headingColor()

    return (
      <div className="modesContainer">
        <div className={`${colorMode} container`}>
          <h1 className={`${headColor} heading`}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onMode}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

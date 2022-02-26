import React, { Component } from 'react'
import { clickAudio, clickAudio2, clickAudio3 } from '../assets/sounds';
import { StyledTimerBox } from './styles';

export default class TimerBox extends Component {
  state = {
    timer : 0,
    inhale: false,
    hold: false,
    release: false,
  }

  timeout = ''

  startInterval = () => {
    this.setState((prevState) => ({timer: prevState.timer + 1}))
    this.timeout = setTimeout(this.startInterval,1000)
  }
  startButtonFunc = () => {
    this.setState({inhale: true})
    this.startInterval()
  }

  stopInterval = () => {
    clearTimeout(this.timeout)
    const initialState = {
      timer : 0,
      inhale: false,
      hold: false,
      release: false,
    }
    this.setState(initialState)
    document.querySelector('h3').innerHTML = 'Timer'
    const growingBall = document.querySelector('.growingBall').style
    growingBall.animation = 'none'
    growingBall.width = '100px'
    growingBall.height = '100px'
    growingBall.backgroundColor = 'blue'
  }


  componentDidUpdate(prevProps, prevState) {
    if(this.state.inhale) {
      document.querySelector('h3').innerHTML = '🫁 INHALE'
      document.querySelector('.growingBall').style.animation = 'inhale 4s linear both'
      this.state.timer === 5  ? this.setState({timer:1, inhale: false, hold: true}) : clickAudio.play()
    }

    if(this.state.hold){
      document.querySelector('h3').innerHTML = '😶 HOLD'
      this.state.timer === 8 ? this.setState({timer:1, hold: false, release: true}) : clickAudio2.play()
    }

    if(this.state.release) {
      document.querySelector('h3').innerHTML = '😮‍💨 EXHALE'
      document.querySelector('.growingBall').style.animation = 'exhale 8s linear both'
      this.state.timer === 9 ? this.setState({timer:1, release: false, inhale: true}) : clickAudio3.play()
    }
  }

  render() {
    return (
      <StyledTimerBox>
        <section>
          <h3>Timer</h3>
          <div className='growingBall'>
            <p className='time'>{this.state.timer}</p>
          </div>
          <div className='buttonsDiv'>
            <button className='btn' onClick={this.startButtonFunc}>START</button>
            <button className='btn' onClick={this.stopInterval}>STOP</button>
          </div>
        </section>
      </StyledTimerBox>
    )
  }
}
import React, { Component } from 'react'
import Header from './components/Header'
import TimerBox from './components/TimerBox'
import {backgroundAudio} from './assets/sounds'
import './Sleeper.css'

export default class Sleeper extends Component {
  render() {
    {setInterval(() => backgroundAudio.play(), 6500)}
    return (
      <>
        <Header />
        <main>
          <TimerBox />
        </main>
      </>
    )
  }
}
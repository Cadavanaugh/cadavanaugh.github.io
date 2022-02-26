import React, { Component } from 'react'
import Header from '../components/Header'

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className='mainContent'>
            <div className='name-pic'>
              <img src="https://avatars.githubusercontent.com/u/60260322?v=4" alt="Cadavanaugh github profile picture." />
              <h3>Jovane A. de Castro A.K.A. Cadavanaugh</h3>
            </div>
            <div className='techs'>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python logo." />
                <h5>Python</h5>
                <p>First programming I learned. All by myself.</p>
              </div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="JS logo." />
                <h5>JavaScript</h5>
                <p>Learned some things by myself. Enrolled to a online course to learn everything.</p>
              </div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo." />
                <h5>React</h5>
                <p>Learned some things by myself. Enrolled to a online course to learn everything.</p>
              </div>
              <div>
                <img src="https://cdn-images-1.medium.com/max/1200/1*ilC2Aqp5sZd1wi0CopD1Hw.png" alt="Flutter logo." />
                <h5>Flutter</h5>
                <p>Learning all by myself. Planning to code a urban mobility mobile app.</p>
              </div>
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default Home
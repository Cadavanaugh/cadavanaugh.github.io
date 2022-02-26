import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export class Projects extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className='projectsContent'>
            <h1>Projects</h1>
            <div className='projectsGrid'>
              <Link to='/projects/sleeper'>
                <div>
                  <img src="https://i.etsystatic.com/14158006/r/il/5c26da/2494768402/il_fullxfull.2494768402_ey3w.jpg" alt="Dummy pic." />
                  <h3>Color Filter</h3>
                  <p>It filters the color by the input. 100% React.<br/>Skills trained: state, state lifting, prop drilling.</p>
                </div>
              </Link>
              <Link to='/projects/sleeper'>
                <div>
                  <img src="src/assets/images/Screenshot from 2022-02-26 15-17-04.png" alt="Dummy pic." />
                  <h3>Sleeper</h3>
                  <p>4-7-8 sleeping technique app. 100% React.<br/>Skills trained: components life cycle with state and events.</p>
                </div>
              </Link>
              <Link to='/projects/sleeper'>
                <div>
                  <img src="https://i.etsystatic.com/14158006/r/il/5c26da/2494768402/il_fullxfull.2494768402_ey3w.jpg" alt="Dummy pic." />
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum dignissimos animi maiores</p>
                </div>
              </Link>
              <Link to='/projects/sleeper'>
                <div>
                  <img src="https://i.etsystatic.com/14158006/r/il/5c26da/2494768402/il_fullxfull.2494768402_ey3w.jpg" alt="Dummy pic." />
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum dignissimos animi maiores</p>
                </div>
              </Link>
              <Link to='/projects/sleeper'>
                <div>
                  <img src="https://i.etsystatic.com/14158006/r/il/5c26da/2494768402/il_fullxfull.2494768402_ey3w.jpg" alt="Dummy pic." />
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum dignissimos animi maiores</p>
                </div>
              </Link>
              <Link to='/projects/sleeper'>
                <div>
                  <img src="https://i.etsystatic.com/14158006/r/il/5c26da/2494768402/il_fullxfull.2494768402_ey3w.jpg" alt="Dummy pic." />
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum dignissimos animi maiores</p>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default Projects
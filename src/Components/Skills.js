import React from 'react'
import './skills.css'
function skills() {
  return (
    <>
    <h1 id='skills' className='heading'>MY SKILLS</h1>
    <div className="skills">
        <div className="frontend">
            <h2 className="myskill">FRONTEND SKILLS</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React.js</li>
                </ul>      
        </div>
        <div className="backend">
            <h2 className="myskill">BACKEND SKILLS</h2>
            <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Express.js</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default skills

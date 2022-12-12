import React from 'react'

function Navigation() {
  return (
    <div className= 'navigation-container' >
        <nav className='navigation-svg'>SomeImage</nav>
        <ul className='navigation-menu'>
            
                <li className='normal-li'><a href="about">O NAMA</a></li>
                <li className='normal-li'><a href="service">USLUGE</a></li>
                <li className='normal-li'><a href="garant">GARANCIJE</a></li>
                <li className='normal-li'><a href="patient">NOVI PACIJENTI</a></li>
                <li className='callUs'><a href="tel:00381652828678">ZAKAZI</a></li>
          
        </ul>
    </div>
  )
}

export default Navigation
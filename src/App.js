import { useEffect } from 'react';
import Education from './components/Education';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Social from './components/Social';
import Welcome from './components/Welcome';
import Work from './components/Work';
import logo from './logo.svg';
import './styles/App.css';

function App() {
  
  useEffect (() => {
    const sections  = document.querySelectorAll('section')
  const navLi = document.querySelectorAll('nav .header-container ul li')

  window.addEventListener('scroll', () => {
    let current = "welcome"

    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if(window.scrollY >= sectionTop - sectionHeight / 3){
        current = section.getAttribute('id')
        console.log(current)
      }
    })

    navLi.forEach(li => {
      li.classList.remove('active')
      if(li.classList.contains(current)){
        li.classList.add('active')
      }
    })
  })
  })
  const sections  = document.querySelectorAll('section')
  const navLi = document.querySelectorAll('nav .header-container ul li')

  window.addEventListener('scroll', () => {
    let current = ""

    sections.forEach(section =>{
      console.log(section)
    })
  })

  return (
    <div className="App">
      <Header />
      <Welcome />
      <Portfolio />
      <Work />
      <Education />
      <Social />
    </div>
  );
}

export default App;

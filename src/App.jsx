import {useState} from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';

import './App.css'
function App() {
  const [open,setOpen]=useState()
  const [currentIndex,setCurrentIndex]=useState(0)

  return (
    <div className="App">
     <section className={open?"main-structure active":"main-structure"}>
        <Header open={open} setOpen={setOpen} />
        <Content currentIndex={currentIndex} />
        <Footer />
    </section>
    <Menu setCurrentIndex={setCurrentIndex}/>
    </div>
  )
}

export default App

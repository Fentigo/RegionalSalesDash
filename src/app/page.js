import Footer from './components/footer'
import React from 'react'
import Sdebar2 from './components/sidebar2'
import Nav from './components/nav'
import Cards from './components/cards'
import ChartPage from './components/barchart'
import TopProducts from './components/topproducts'
import TargetChart from './components/targetvsrevenue'
import './styles.modules.css'

export default function Home() {
  return (
    < >
      <body>

        <main className='main'>
          <div>
            <Nav/>
          </div>
          <div className='sidebar'>
            <Sdebar2/>
          </div>
          <div className='cards'>
            <Cards/>
          </div>
          <div className='chartpage'>
            <ChartPage/>
          </div>
          <div className='topproducts'>
            <TopProducts/>
          </div>
          <div>
          </div>
          <div className='targetchart'>
            <TargetChart/>
          </div>
          <div >
          </div>

        </main>

    </body>
    <footer>
      <Footer/>
    </footer>
    </>
    

  )
}
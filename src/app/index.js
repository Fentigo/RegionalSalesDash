import React from "react";
export default function Home() {
    return (
      <main className={styles.main}>
      <div className ={styles.Nav}>
      <Nav/>
      </div>
  
      <Header/>
      <div className={styles.Footer}>
        <Footer/>
      </div>
      
      </main>
  
    )
  }
  ReactDOM.render(<h1>King</h1>, getElementById('root'));
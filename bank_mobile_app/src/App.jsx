import React from 'react'
import styles from './style'

const App = () => (
  <div className='bg-black-gradient  w-full overflow-hidden'>
    <div className={`${styles.paddingX}${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>
    <div className={`bg-black-gradient  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>hero</div>
    </div>
  </div>
)

export default App

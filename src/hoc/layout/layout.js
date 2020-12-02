import React from 'react';
import Navbar from '../../components/navbar/navbar';

const Layout = React.memo((props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        {props.children}
      </main>
    </React.Fragment>
  )
})

export default Layout;
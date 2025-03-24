import Header from './Header.jsx'
import { Outlet } from 'react-router-dom';

function Base(props) {

  return (
    <> 
      <div className="w-full h-screen min-h-screen flex flex-col">
        <Header />
        <Outlet />
        {props.children}
   
      </div>

          

    </>
  )
}

export default Base
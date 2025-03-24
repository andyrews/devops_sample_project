import Header from './Header.jsx'
import { Outlet } from 'react-router-dom';

function Base(props) {

  return (
    <> 
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <Outlet />
        {<div className="flex grow flex-col">
          {props.children}
        </div>}
      </div>

          

    </>
  )
}

export default Base
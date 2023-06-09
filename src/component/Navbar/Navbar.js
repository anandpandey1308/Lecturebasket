import React, { useRef } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../../firebase';

function Navbar() {
  const navigate = useNavigate()
const handleit = () => {  
  navigate('/')
}


const handlecart = () => {
navigate('/cart')
}

const searchInputRef = useRef(null);
    const handlesub = (e)=>{
        e.preventDefault();
        const searchValue = searchInputRef.current.value;
        const Str = searchValue.toLowerCase();
        navigate(`/${Str}`);
    }

    const handlesign = (e) => {
      e.preventDefault();
    
      const confirmed = window.confirm("Are you sure you want to sign out?");
      if (confirmed) {
        auth
          .signOut()
          .then(() => {
            navigate('/login');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Cancelled sign out
      }
    };
  return (
    <div className='main-class'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary colorbg">
  <div className="container-fluid">
    <div className="navbar-brand custom" onClick={handleit} >Lectureb@sket.com</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0 align">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CA Foundation 
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/foundationaccounting">Accounting</Link></li>
            <li><Link className="dropdown-item" to="/foundationbussiness">Business Laws & BCR</Link></li>
            <li><Link className="dropdown-item" to="/foundationMathematics">Mathematics Statics LR</Link></li>
            <li><Link className="dropdown-item" to="/foundationeconomics">Economics & BCK</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CA Intermediate
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/intermediateaccounting">Accounting</Link></li>
            <li><Link className="dropdown-item" to="/intermediatecorporate">Corporate & Other Laws</Link></li>
            <li><Link className="dropdown-item" to="/intermediatecosting">Costing</Link></li>
            <li><Link className="dropdown-item" to="/intermediatetaxation">Taxation</Link></li>
            <li><Link className="dropdown-item" to="/intermediateadv">Advanced Accounting</Link></li>
            <li><Link className="dropdown-item" to="/intermediateauditing">Auditing</Link></li>
            <li><Link className="dropdown-item" to="/intermediateei">EIs & SM</Link></li>
            <li><Link className="dropdown-item" to="/intermediatefm">FM & ECO</Link></li>
         
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           CA Finals
          </Link>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/finalfr">FR</Link></li>
            <li><Link className="dropdown-item" to="/finalsfm">SFM</Link></li>
            <li><Link className="dropdown-item" to="/finalaud">Auditing</Link></li>
            <li><Link className="dropdown-item" to="/finallaw">Law</Link></li>
            <li><Link className="dropdown-item" to="/finalscmpe">SCMPE</Link></li>
            <li><Link className="dropdown-item" to="/finalelective">Elective</Link></li>
            <li><Link className="dropdown-item" to="/finaldt">DT</Link></li>
            <li><Link className="dropdown-item" to="/finalidt">IDT</Link></li>
           
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About us</Link>
        </li>
      </ul>

  
      <form className="d-flex" role="search">
        <input ref={searchInputRef}  className="form-control me-2" type="search" placeholder="book/teacher/all" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={handlesub}>Search</button>
      </form>
      <button className="btn btn-outline-primary ms-2  btn-sm float-end media " onClick={handlecart}>Your Books</button>
      <button className="btn btn-outline-danger ms-2   btn-sm float-end media " onClick={handlesign}>logout</button>
    
    
    </div>
  </div>
  
</nav>
    </div>
  )
}

export default Navbar

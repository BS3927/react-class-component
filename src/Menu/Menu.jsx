import "./Menu.css";
import React,{lazy, Suspense} from "react";
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'

const Home=lazy(()=>import('../Home/index'));
const About=lazy(()=>import('../About/index'));
const Contact=lazy(()=>import('../Contact/index'));
const Services=lazy(()=>import('../Services/index'));
const PageNotFound=lazy(()=>import('../PageNotFound/index'));

function template() {
  return (
    <div>
      <BrowserRouter>
        {this.state.isMobileView && <img onClick={this.fnMobileMenuClick} src="mobilemenubutton.jpg"/>}
        <ul style={{left:this.state.l}} onClick={this.f} className={this.state.isMobileView ? 'mobile-menu':'menu'}>
          <li className={this.state.menuItom=='Home' ? 'active':''}><Link to='Home'>Home</Link></li>
          <li className={this.state.menuItom=='About' ? 'active':''}><Link to='About'>About</Link></li>
          <li className={this.state.menuItom=='Contact' ? 'active':''}><Link to='Contact'>Contact</Link></li>
          <li className={this.state.menuItom=='Services' ? 'active':''}><Link to='Services'>Services</Link></li>
        </ul>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/*" element={<PageNotFound/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default template;

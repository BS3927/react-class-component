import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {
  state={
    l:-250,
    menuItom:'Home',
    isMobileView:document.body.offsetWidth<=600 ? true:false
  }
  timerId=null;

  constructor(){
    super();
    window.addEventListener('resize',()=>{
      clearTimeout(this.timerId)
      this.timerId=setTimeout(()=>{
        let deviceWidth=document.body.offsetWidth
        if(deviceWidth<=600){
          this.setState({
            isMobileView:true
          })
        }else{
          this.setState({
            isMobileView:false
          })
        }
      },500)    
    })
  }

  f=(e)=>{
    e.stopPropagation()
    if(e.target.nodeName=='UL'){
      return
    }
    this.setState({
      menuItom:e.target.innerText,
      l:-250
    })
  }

  fnMobileMenuClick=()=>{
    this.setState({
      l:this.state.l==0 ? -250:0
    })
  }

  render() {
    return template.call(this);
  }
}

export default Menu;
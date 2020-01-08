import React from 'react';

class HeaderLink extends React.Component {
  render(){
    var { children } = this.props;
    return (
      <div className="Header-link-holder inline-block c-pointer">
        {children}
        content comes here
        {/* <NavLink href="" className="header-li">{children}</NavLink> */}
      </div>
    );
  }
}

export default HeaderLink                                                                                                                                                                                                                                                                                                                                                           ;

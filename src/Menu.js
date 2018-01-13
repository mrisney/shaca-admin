import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';

const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/" primaryText="Dashboard" onClick={onMenuTap} />
        <MenuItemLink to="/hpdmvars" primaryText="HPD" onClick={onMenuTap} />
        <MenuItemLink to="/hpdmvars" primaryText="KPD" onClick={onMenuTap} />    
        <MenuItemLink to="/hpdmvars" primaryText="MPD" onClick={onMenuTap} />
    
        <MenuItemLink to="/hpdmvars" primaryText="Database Center" onClick={onMenuTap} />
        <MenuItemLink to="/hpdmvars" primaryText="Aloha Data Systems" onClick={onMenuTap} />
        <MenuItemLink to="/hpdmvars" primaryText="Aloha Data Systems" onClick={onMenuTap} />
    
        <MenuItemLink to="/custom-route" primaryText="Configuration" onClick={onMenuTap} />
        
        {logout}
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
})
export default connect(mapStateToProps)(Menu);
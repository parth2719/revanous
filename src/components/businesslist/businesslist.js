import React from 'react';
import './businesslist.css';
import business from '../business/business';

class businesslist extends React.Component {
    render() {
       
    return (
    <div className="businessList">
       <business />  
       <business />  
       <business />  
       <business />  
       <business />  
       <business />
    </div>
    );
    }
}
export default businesslist;

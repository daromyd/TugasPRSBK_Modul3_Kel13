import {Component} from "react"; 
import React from "react"; 
import Child from "./Child";
import Ani from "./Ani";
import Ane from "./Ane"; 
import Anu from "./Anu";
   
 
class Parent extends Component{ 
 
    state = {         
        komponenMuncul : true     
    } 
 
    ubahKomponenMuncul = () => { 
        this.setState((state) => {             
            return {komponenMuncul : !this.state.komponenMuncul}         
        })     
    } 
 
    render() {         
        return (             
        <div>                 
            {this.state.komponenMuncul ? <Child/> : ''}
            {this.state.komponenMuncul ? <Ani/> : ''}
            {this.state.komponenMuncul ? <Ane/> : ''}
            {this.state.komponenMuncul ? <Anu/> : ''}                     
            <button onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'hilangkan' : 'munculkan'} komponen!</button>             
        </div>         
            );     
        } 
    } 
 
export default Parent;
import React, {Component} from "react"; 
 
class Child extends Component {
    // tepat dibawah deklarasi class Child 
    state = {         
        angka: 0     
    } 
    // kode berikutnya... 
    componentDidMount() {         
        alert(`Di enteni sek`)     
    }
    tambahAngka = () => {         
        this.setState((state) => {return {angka: state.angka + 1}}) 
    } 
    componentDidUpdate(prevProps, prevState, snapshot) {         
        alert(`Component Updates! State angka sebelumnya: ${prevState.angka}`)     
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {         
        return window.confirm('Haruskah Component ini di-Update?');     
    }
    componentWillUnmount() {         
        alert('I will be gone :(')     
    }
 
    render() {         
        return (             
        <div>
            <button onClick={this.tambahAngka}>Coba DidUpdate!</button> 
            <br/> 
            <span>{this.state.angka}</span>              
        </div>         
        );     
    } 
} 
 
export default Child;
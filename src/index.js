import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App'



class Main extends Component {
    render() {
        return(
            <App/>
        )        
    }
}

// window.addEventListener('keypress', (e) => {
//     if(e){
//      window.location.reload(false);
//     }  
// })

ReactDOM.render(<Main/>, document.querySelector('#root'));
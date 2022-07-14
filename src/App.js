import './assets/css/App.css'
import React from 'react'
function Son(props){
  const {getSonMes} = props
  return(
    <div>this is son<button onClick={()=>getSonMes('from son')}></button></div>
  )
}

class App extends React.Component{
  getSonMes=(SonMes)=>{
    console.log(SonMes)
  }
  render(){
    return (
      <div>  
        <Son getSonMes={this.getSonMes}/>
      </div>
    )
  }
}
export default App

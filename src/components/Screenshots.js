import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Screenshots extends React.Component {
  state = {

  }
  
  fetchGame = () => {
    const id = this.props.match.params.id
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      
      this.setState({game : data.filter(item => {
        return item.id == id
      }
        )})
    })
  }

  componentDidMount(){
    this.fetchGame()
  }
  
  render(){
    console.log(this.state.game);
    return(
      <div>
        <Link to='/'>
          <input type='button' value ='GO HOME!'/>
        </Link>

        {this.state.game ? this.state.game[0].short_screenshots.map( screenshot => {
          return <img src = {screenshot.image} alt={this.state.game[0].name}/>
        }) : 'loading' }
      </div>
    )
  }
}
export default Screenshots
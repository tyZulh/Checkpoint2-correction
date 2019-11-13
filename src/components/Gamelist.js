import React from 'react'
import Game from './Game'
import axios from 'axios'

class Gamelist extends React.Component {
  state = {
    games : []
  }

  handleDelete = (arthur) => {
    const newGamesList = this.state.games
    newGamesList.splice(arthur, 1)
    this.setState({ games : newGamesList })
  }

  fetchData = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then(res => res.data)
    .then(res => this.setState({ games : res}))
  }
  componentDidMount(){
    this.fetchData()
  }

  render() {
    
    return(
      <div>
        {this.state.games.map((game ,i )=>{
          return <Game data = {game} index={i} remove={this.handleDelete}/>
        })}
      </div>
    )
  }
}

export default Gamelist
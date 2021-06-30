import { Component } from 'react'
import Appartement from './Appartement'
import Header from './Header'

// material-ui
// import Button from '@material-ui/core/Button'

const appartements = [
  {
    key: 0,
    dispo: true,
    nom: "Appartement n°1",
    photo: "https://via.placeholder.com/300x230",
    prix: 45,
    note: 4,
  },

  {
    key: 1,
    dispo: false,
    nom: "Appartement n°2",
    photo: "https://via.placeholder.com/350x200",
    prix: 30,
    note: 2,
  },

  {
    key: 2,
    dispo: true,
    nom: "Appartement n°3",
    photo: "https://via.placeholder.com/400x250",
    prix: 60,
    note: 5,
  },

  {
    key: 3,
    dispo: false,
    nom: "Appartement n°4",
    photo: "https://via.placeholder.com/280x255",
    prix: 24,
    note: 3,
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dispo: false,
    }

    this.toggleDispo = this.toggleDispo.bind(this)
  }

  toggleDispo() {
    this.setState(
      (state, props) => ({ dispo: !state.dispo })
    )
  }

  render() {
    const { dispo } = this.state
    const appartementsDispo = dispo ? appartements : appartements.filter(appart => appart.dispo)

    return (
      <div>
        <Header />

        <div className="boutonFiltre">
          <button onClick={this.toggleDispo}>
            {dispo ? "Disponibles" : "Tout voir"}
          </button>
        </div>

        {appartementsDispo.map(
          appartement => <Appartement {...appartement} />
        )}
      </div>
    )
  }
}

export default App

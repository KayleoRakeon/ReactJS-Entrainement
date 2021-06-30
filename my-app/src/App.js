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
    photo: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    prix: 45,
    note: 4,
  },

  {
    key: 1,
    dispo: false,
    nom: "Appartement n°2",
    photo: "https://cdn.pixabay.com/photo/2015/02/02/23/39/hall-621741_1280.jpg",
    prix: 30,
    note: 2,
  },

  {
    key: 2,
    dispo: true,
    nom: "Appartement n°3",
    photo: "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg",
    prix: 60,
    note: 5,
  },

  {
    key: 3,
    dispo: false,
    nom: "Appartement n°4",
    photo: "https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg",
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

        <section>
          {appartementsDispo.map(
            appartement => <Appartement {...appartement} />
          )}
        </section>
      </div>
    )
  }
}

export default App

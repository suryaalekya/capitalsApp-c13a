import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCountryId: countryAndCapitalsList[0].id,
  }

  getCountry = () => {
    const {activeCountryId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCountryId,
    )
    return activeCountryAndCapital.country
  }

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getCountry(activeCountryId)

    return (
      <div className="bg-container">
        <div className="capitalApp-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCountryId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

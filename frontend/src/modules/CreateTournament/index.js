import React, { Component } from 'react';
import './styles.css';

class CreateTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      numTeams: '',
      location: '',
      numRounds: ''
    };

    this.nameChange = this.nameChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.numTeamsChange = this.numTeamsChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.numRoundsChange = this.numRoundsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }

  startDateChange(event) {
    this.setState({ startDate: event.target.value });
  }

  numTeamsChange(event) {
    this.setState({ numTeams: event.target.value });
  }

  endDateChange(event) {
    this.setState({ endDate: event.target.value });
  }

  numRoundsChange(event) {
    this.setState({ numRounds: event.target.value });
  }

  locationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = JSON.stringify({
      name: this.state.name,
      location: this.state.location,
      start_date: this.state.startDate,
      end_date: this.state.endDate
    });
    this.props.onSubmit(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul class="flex">
          <p> Tournament Name: </p>
          <p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.nameChange}
            />
          </p>

          <p> Location: </p>
          <p>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.locationChange}
            />
          </p>

          <u2 class="flex2">
            <u2>
              <p> Start Date: </p>
              <p>
                <input
                  type="text"
                  name="startDate"
                  value={this.state.startDate}
                  onChange={this.startDateChange}
                />
              </p>
            </u2>

            <u2>
              <p> Number of Teams: </p>
              <p>
                <input
                  type="text"
                  name="numTeams"
                  value={this.state.numTeams}
                  onChange={this.numTeamsChange}
                />
              </p>
            </u2>
          </u2>

          <p> End Date: </p>
          <p>
            <input
              type="text"
              name="endDate"
              value={this.state.endDate}
              onChange={this.endDateChange}
            />
          </p>

          <p> Number of Rounds: </p>
          <p>
            <input
              type="text"
              name="numRounds"
              value={this.state.numRounds}
              onChange={this.numRoundsChange}
            />
          </p>

          <p>
            <input type="submit" value="Create" />
          </p>
        </ul>
      </form>
    );
  }
}

export default CreateTournament;

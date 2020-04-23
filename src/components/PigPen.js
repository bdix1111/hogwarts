import React   from "react";
import Pig from './Pig';

class PigPen extends React.Component {

  render() {

    const piggies = this.props.hogs.map( (pig) => <Pig pig={pig} key={pig.name} showMe={this.props.showMe}/> )

    return (
      <div>
        <h1>Oink Oink</h1>
        <div>
          {piggies}
        </div>
      </div>
    );
  }
}

export default PigPen;

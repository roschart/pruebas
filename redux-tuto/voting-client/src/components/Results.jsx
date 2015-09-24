import React from 'react/addons';
import Winner from './Winner';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getPair() {
    return this.props.pair || [];
  },
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props
        .tally
        .get(entry);
    }
    return 0;
  },
  render() {
    return this.props.winner
      ? <Winner ref="winner" winner={this.props.winner}/>
      : <div className="results">
          <div className="tally">
            {this
              .getPair()
              .map(entry => <div className="entry" key={entry}>
                  <h1>{entry}</h1>
                  <div class="voteCount">
                    {this.getVotes(entry)}
                  </div>
                </div>)}
          </div>
          <div className="management">
            <button className="next" onClick={this.props.next} ref="next">
              Next
            </button>
          </div>
        </div>;
  }
});
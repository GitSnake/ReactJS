let Product = React.createClass({
	getInitialState: function(){
		return {qty: 0};
	},

	buy: function(){
		this.setState({qty: this.state.qty + 1});
	},

  render: function(){
  	return (
  		<main>
  			<p>Android - $199</p>
  			<button onClick={this.buy}>Buy</button>
  		</main>
  	);
  }
});

React.render(<Product />, document.getElementById("root"));
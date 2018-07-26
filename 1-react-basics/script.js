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
  			<h3>Qty: {this.state.qty} item(s)</h3>
  		</main>
  	);
  }
});

let Total = React.createClass({
	render: function() {
		return (
			<div>
			<h3>Total Cash: </h3>
			</div>
			);
	}
});

let ProductList = React.createClass({
	render: function() {
		return (
			<div>
				<Product />
				<Product />
				<Product />
				<Total />
			</div>
			);
	}
});




React.render(<Product />, document.getElementById("root"));







































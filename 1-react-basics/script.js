let Product = React.createClass({
	getInitialState: function(){
		hello
	},

	buy: function(){
		alert("You bought an Android mobile.");
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
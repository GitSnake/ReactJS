let Product = React.createClass({
  render: function(){
  	return (
  		<main>
  			<p>Android - $199</p>
  			<button>Buy</button>
  		</main>
  	);
  }
});

React.render(<Product />, document.getElementById("root"));
let Product = React.createClass({
  render: function(){
  	return (
  		<h2>What's up React? Hello from GitSnake.</h2>
  	);
  }
});

React.render(<Product />, document.getElementById("root"));
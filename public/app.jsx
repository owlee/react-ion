var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a component from React!'
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    alert(name);
  },
  render: function () {
    var name = this.props.name;
    var msg = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Oscar';
var message = 'This is Oscar\'s message!';

ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);

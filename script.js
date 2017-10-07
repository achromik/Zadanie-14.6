var componentsCounter = 0;

var Counter = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        resetable: React.PropTypes.bool
    },

    getInitialState: function(){
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    resetCounter: function() {
        this.setState({
            counter: 0
        })

    },

    //**** OPTIONAL LIFECYCLE METHODS */

    componentWillMount: function () {
        console.log('Making component no ' + this.props.id + ' to mount. Mounting in a while!' );
        
    },

    componentDidMount: function () {
        console.log( 'Component mounted! Counter id ' + this.props.id);
    },

    componentWillReceiveProps: function() {
        console.log('Component get props');
    },

    shouldComponentUpdate: function () {
        console.log('Component ' + this.props.id +' get new state');
        return true;
    },
    
    componentWillUpdate: function() {
        console.log('Updating component')
    },

    componentDidUpdate: function() {
        console.log('UPDATED!');
    },

    componentWillUnmount: function(){
        console.log('You click delete counter. Component will unmount');
    },

    //** END ********************* */

    render: function() {
        return React.createElement('div', {className: 'counter'}, 
            
            React.createElement('div', {className: 'btn-group'}, 
                React.createElement('button', {
                    className: 'btn btn-danger',
                    onClick: this.decrement
                }, '-'),
                React.createElement('div', {
                    className: this.props.resetable ? 'btn btn-default noHover' : 'btn btn-success',
                    style :  {
                        cursor: this.props.resetable ? 'not-allowed' : 'pointer'
                     },
                    onDoubleClick: this.resetCounter
                }, 'Counter no. ' + this.props.id +  ': ' + this.state.counter),
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: this.increment
                }, '+'),
            )
        );
    }
});

var element = React.createElement('div', {}, 
    React.createElement(Counter, { 
        'resetable' : true,
        'id' : componentsCounter++
    }),
    React.createElement(Counter, {'id' : componentsCounter++ }),
    React.createElement(Counter, {'id' : componentsCounter++ }),
);
ReactDOM.render(element, document.getElementById('app'));

var info = React.createElement('div', {className: info},
    React.createElement('p', {}, 'Green counters are resetable. Double click on it for reset.')
);

ReactDOM.render(info, document.getElementById('info'));
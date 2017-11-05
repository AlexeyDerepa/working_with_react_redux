var Hero = React.createClass({

    getInitialState: function() {
        return {
            count: 0
        }
    },
    
    handleClick: function() {
        this.setState({count: this.state.count + 1});
        console.log('click');
    },

    render: function(){
        return(
            // <div>
            //     <div>{this.state.count}</div>
                <img src={this.props.imageUrl} onClick={this.handleClick} />
            //     <p>{this.props.subtitle}</p>
            // </div>
        );
    }
});

ReactDOM.render(
    <Hero 
        imageUrl='./logo.svg' 
        subtitle='some library'
    />, 
    document.getElementById('root'));
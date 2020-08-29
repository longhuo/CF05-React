import React, {Component} from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            let url = "https://picsum.photos/200/300?random="+ (Math.random()* 100).toFixed(0);
            this.setState({
                urls:  [...this.state.urls, url]
            });
        }, 5000)
    }

    render() {
        return (
            <div>
                {this.state.urls.length > 0 && this.state.urls.map( item => <img src={item}/>)}
            </div>
        );
    }
}

export default Image;
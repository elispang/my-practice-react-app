import React, {Component} from 'react';

class Quote extends Component{
    constructor(){
        super()
        this.state= {
            quote: '',
            author: '',
            allQuotes: []
        }
        this.newQuote = this.newQuote.bind(this)
        this.tweet = this.tweet.bind(this)
    }

    componentDidMount(){
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(response => {
        const quotes = response.quotes
        this.setState({ allQuotes: quotes })
        this.newQuote()
        })
    }
    
    newQuote(){
        let randomNum = Math.floor(Math.random() * this.state.allQuotes.length)
        let newQuote = this.state.allQuotes[randomNum]
        console.log(newQuote)
        this.setState({quote: newQuote.quote,
                        author: newQuote.author
        })
    }

    tweet(){
        let url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.state.quote + " -" + this.state.author)
        window.open(url, "_blank");
    }



    render(){
        return (
            <div className="quote-box">
                    <h1 className="quote">{this.state.quote}</h1>
                    <h2 className="author">~ {this.state.author}</h2>
                    <button onClick={this.newQuote}className="button"><i class="fa fa-fw fa-quote-left"></i> New Quote</button>
                    <button onClick={this.tweet}className="button"><i className="fa fa-twitter"></i> Tweet</button>
                </div>
           
        )
    }
}


export default Quote;
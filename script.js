const QAarr = [
    {quoteText: 'An investment in knowledge always pays the best interest.',
    quoteAuthor : 'Benjamin Franklin'},
    {quoteText: 'All would live long, but none would be old.',
    quoteAuthor : 'Benjamin Franklin'},
    {quoteText: 'Our greatest glory is not in never falling, but in getting up every time we do.',
    quoteAuthor : 'Confucius'},
    {quoteText: 'Not to know is bad, not to wish to know is worse.',
    quoteAuthor : 'Proverb'}
];

const colors = ['255, 0, 0', '0, 125, 0', '0, 0, 200', '125, 0, 125', '0, 125, 125', '125, 125, 0'];

const QuoteText = (props) => {
    return (
        <div id='quote-author'>
            <div id='quote-text'>
                <span id='text'>
                    {props.text}
                </span>
            </div>
            <div id='author-box'>
                <span id='author'>
                    {props.author}
                </span>
            </div>
        </div>
    );
}

QuoteText.propTypes = {text: PropTypes.string.isRequired, author: PropTypes.string.isRequired}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            style: {backgroundColor: 'rgba(' + colors[Math.floor(Math.random()*colors.length)] + ', 0.5)'}
        };
        this.getNewQuote = this.getNewQuote.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    };

    componentDidMount() {
        this.getNewQuote();
    }

    getNewQuote() {
        let index = Math.round(Math.random()*3);
        this.setState({
            quote: QAarr[index].quoteText,
            author: QAarr[index].quoteAuthor
        })
    };

    changeStyle() {
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        this.setState({
            style: {backgroundColor: 'rgba(' + randColor + ', 0.5)'}
        })
    }

    buttonIsClick = () => {
        this.getNewQuote();
        this.changeStyle();
    }

    render() {
        return (
            <div id='window' style={this.state.style}>
                <div id='quote-box' style={this.state.style}>
                    <QuoteText text={this.state.quote} author={this.state.author}/>
                    <div id='buttons-box'>
                        <a id='tweet-quote' href="twitter.com/intent/tweet"><i class="fa fa-twitter"></i></a>
                        <button id='new-quote' onClick={this.buttonIsClick}>New quote</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName: 'Oyebolu Ibukun',
                bio: 'Software Engineer with 2 years of experience in full-stack development.',
                imgSrc: 'https://i.pinimg.com/736x/1f/9c/a5/1f9ca55e391e16eb77c4cd724ecc436b.jpg',
                profession: 'Software Engineer',
            },
            shows: false,
            timeSinceMounted: 0,
        };
        this.timer = null; // To store the interval ID
    }

    componentDidMount() {
        // Set an interval to update the time since component mounted
        this.timer = setInterval(() => {
            this.setState(prevState => ({ timeSinceMounted: prevState.timeSinceMounted + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        // Clear the interval to prevent memory leaks
        clearInterval(this.timer);
    }

    toggleShow = () => {
        this.setState(prevState => ({ shows: !prevState.shows }));
    };

    render() {
        const { person, shows, timeSinceMounted } = this.state;

        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Person Profile</h1>
                <button 
                    onClick={this.toggleShow} 
                    style={{ marginBottom: '20px', padding: '10px 20px', fontSize: '16px' }}
                >
                    {shows ? 'Hide Profile' : 'Show Profile'}
                </button>
                {shows && (
                    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
                        <img 
                            src={person.imgSrc} 
                            alt={person.fullName} 
                            style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }} 
                        />
                        <h2>{person.fullName}</h2>
                        <p><strong>Bio:</strong> {person.bio}</p>
                        <p><strong>Profession:</strong> {person.profession}</p>
                    </div>
                )}
                <div style={{ marginTop: '20px' }}>
                    <p>Time since component mounted: {timeSinceMounted} seconds</p>
                </div>
            </div>
        );
    }
}

export default App;

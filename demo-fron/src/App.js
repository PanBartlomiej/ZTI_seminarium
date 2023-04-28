import './App.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CenterContent from './components/CenterContent/CenterContent';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
    const [activeTab, setActiveTab] = React.useState(0)
    const [randomQuote, setRandomQuote] = React.useState('')
    const [loginResultText, setLoginResultText] = React.useState('');

    const nonsenseQuotes = [
        'A principal idea could please even the most demanding follower of Freud.',
        'Utter nonsense is not enough.',
        'Spam is always a pleasure.',
        'Tomorrow is not enough.',
        'Nothing of importance says hello.',
        'Bananas speak a secret language.',
        'Trees can talk but only to themselves.',
        'Shoes have feelings too, you know.'
    ]

    function handleTabChange(event, tabIndex) {
        setActiveTab(tabIndex);
    };

    function handleSaySomethingClick(event) {
        console.log("Say something clicked");

        const randomIndex = Math.floor(Math.random() * nonsenseQuotes.length);
        setRandomQuote(nonsenseQuotes[randomIndex]);
    }

    function handleLoginSubmit(data) {
        console.log("Login form submit: ", data);

        setLoginResultText(Math.random() > 0.5 ? 'Zalogowano' : 'Zły email lub hasło')
    }

    return (
        <div className="App">
            <CenterContent
                style={{
                    justifyContent: 'flex-start',
                    paddingTop: '20vh'
                }}
            >
                <Box sx={{bgcolor: 'background.paper'}}>
                    <Tabs value={activeTab} onChange={handleTabChange}>
                        <Tab label="Get"></Tab>
                        <Tab label="Post"></Tab>
                    </Tabs>
                </Box>

                {activeTab === 0 && <Box sx={{paddingTop: '1rem'}}>
                    <Button
                        sx={{
                            marginTop: '0.5rem'
                        }}
                        variant='contained'
                        onClick={handleSaySomethingClick}
                        >
                        Powiedz coś
                    </Button>
                    <h2>
                        {randomQuote}
                    </h2>
                </Box>}

                {activeTab === 1 && <Box>
                    <LoginForm onSubmit={handleLoginSubmit}/>
                    <h2>
                        {loginResultText}
                    </h2>
                </Box>}
            </CenterContent>
        </div>
    );
}

export default App;

import logo from './banner.png';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button} from "@mui/material";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    The World's #1 All-In-One Davening App!
                </p>
                <Button variant="contained" onClick={() => {
                    if (window.confirm("Download Shulert?")) {
                        window.open("https://www.shulert.com", "_blank");
                    }
                }}>Download For Free Now!</Button>
            </header>
        </div>
    );
}

export default App;

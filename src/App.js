import './App.css';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
    return (
        <div className="App">
            <Authenticator>
                {({signOut, user}) => (
                    <div>
                        <p>Welcome {user.username}</p>
                        <button onClick={signOut}>Sign out</button>
                    </div>
                )}
            </Authenticator>
        </div>
    );
}

export default App;

import '../App.css'
import {AppProviders} from "./providers.jsx";
import { useTheme } from "./theme-context.jsx";

function App() {

    return (
        <AppProviders>
            <ThemeTester />
        </AppProviders>
    );
}

function ThemeTester() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="app">
            <h1>Current theme: {theme}</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </div>
    );
}

export default App;

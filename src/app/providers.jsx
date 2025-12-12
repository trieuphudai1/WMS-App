import { ThemeProvider } from './theme-context';

export function AppProviders({ children }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

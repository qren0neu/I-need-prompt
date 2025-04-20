import React from 'react';
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Container,
    Typography,
    Box,
    Grid,
    Stack
} from '@mui/material';
import Search from './components/Search';
import SearchSettings from './components/SearchSettings';

// Create a theme instance
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* This normalizes styles across browsers */}
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Stack spacing={2}>
                        <Search />
                        <SearchSettings />
                    </Stack>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'auto',
                        p: 2
                    }}
                >

                </Box>
            </Container>
        </ThemeProvider>
    );
}
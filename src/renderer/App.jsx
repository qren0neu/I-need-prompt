import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    Stack,
    ThemeProvider
} from '@mui/material';
import React, { useState } from 'react';
import Search from './components/Search';
import SearchSettings from './components/SearchSettings';
import MainPanel from './components/MainPanel';

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
    const [currentPage, setCurrentPage] = useState('home');
    const [pageData, setPageData] = useState({});

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
                <Box
                    sx={{
                        flexGrow: 1,
                        overflow: 'auto',
                        p: 2
                    }}
                >
                    <MainPanel currentPage={currentPage} pageData={pageData} />
                </Box>

                <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
                    <Stack spacing={2}>
                        <Search />
                        <SearchSettings />
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
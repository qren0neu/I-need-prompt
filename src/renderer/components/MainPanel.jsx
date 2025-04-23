import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

/**
 * MainPanel component that displays different content based on the current page
 * @param {Object} props
 * @param {string} props.currentPage - Current page to display ('home', 'details', 'settings', etc.)
 * @param {Object} props.pageData - Data needed for the current page
 */
const MainPanel = ({ currentPage = 'home', pageData = {} }) => {
    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <Typography variant="h5">
                        Home Page - Prompt Collection
                    </Typography>
                );
            case 'details':
                return (
                    <Typography variant="h5">
                        Details for: {pageData.title || 'Selected Prompt'}
                    </Typography>
                );
            case 'settings':
                return (
                    <Typography variant="h5">
                        Settings
                    </Typography>
                );
            default:
                return (
                    <Typography variant="h5">
                        Select an option from above
                    </Typography>
                );
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                height: '100%',
                p: 3,
                overflow: 'auto'
            }}
        >
            {renderContent()}
        </Paper>
    );
};

export default MainPanel;
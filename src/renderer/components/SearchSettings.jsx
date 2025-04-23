import React, { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import BugReportIcon from '@mui/icons-material/BugReport';

const SearchSettings = () => {
    const [isDev, setIsDev] = useState(false);

    useEffect(() => {
        // Check if we're in development mode
        // @ts-ignore
        if (window.electron && window.electron.isDev) {
            // @ts-ignore
            window.electron.isDev().then(devMode => {
                setIsDev(devMode);
            });
        }
    }, []);

    const handleDebugClick = () => {
        // @ts-ignore
        if (window.electron) {
            // @ts-ignore
            window.electron.openDevTools();
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip title="Build and Add a prompt">
                <IconButton aria-label="build-add-prompt">
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
                <IconButton aria-label="settings">
                    <SettingsIcon />
                </IconButton>
            </Tooltip>
            {isDev && (
                <Tooltip title="Debug">
                    <IconButton aria-label="debug" onClick={handleDebugClick}>
                        <BugReportIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Box>
    );
};

export default SearchSettings;
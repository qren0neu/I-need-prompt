import React, { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
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
            <Tooltip title="Filter">
                <IconButton aria-label="filter">
                    <FilterListIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Sort">
                <IconButton aria-label="sort">
                    <SortIcon />
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
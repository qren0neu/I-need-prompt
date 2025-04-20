import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const Search = () => {
    const [searchValue, setSearchValue] = React.useState('');

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchValue('');
    };

    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderRadius: 2,
                boxShadow: 1
            }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search prompts..."
                value={searchValue}
                onChange={handleSearch}
                inputProps={{ 'aria-label': 'search prompts' }}
            />
            {searchValue && (
                <IconButton
                    sx={{ p: '10px' }}
                    aria-label="clear"
                    onClick={handleClearSearch}
                >
                    <ClearIcon />
                </IconButton>
            )}
        </Paper>
    );
};

export default Search;
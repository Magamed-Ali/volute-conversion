import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import {addVoluteTC, VoluteType} from "../../state/currency-reducer";
import {useAppDispatch} from "../../state/store";

function HomePage(props: { data: VoluteType[] }) {
    const [volute, setVolute] = React.useState('');

    const dispatch = useAppDispatch()
    const handleChange = (event: SelectChangeEvent) => {
        setVolute(event.target.value as string);
        dispatch(addVoluteTC(event.target.value as string))
    };

    return (
        <div className="home-page">
            <h2>Главная страница</h2>
            <h6>список валют относительно базовой валюты</h6>

            <div className="home-page__volute">

                <Box sx={{minWidth: 140, maxWidth: 150}}>
                    <h5>Выбрать валюту:</h5>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Volute</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={volute}
                            label="Volute"
                            onChange={handleChange}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 500,
                                    },
                                },
                            }}
                        >
                            {props.data.map(i => <MenuItem key={i.key} value={i.key}>{i.key}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
                <div className="volute-right">
                    {
                        props.data.length ? props.data.map(i =>
                                <span key={i.key} className="vol-box">
                                    <span>{i.key}</span>
                                    <span>{i.value.toFixed(3)}</span>
                                </span>
                            )
                            :
                            <div className="volute-right__preloader">
                                <Box sx={{display: 'flex'}}>
                                    <CircularProgress sx={{color: '#00214a', marginRight: '10px', margin: "auto"}}/>
                                </Box>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;
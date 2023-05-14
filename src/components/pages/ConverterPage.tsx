import React, {ChangeEvent, useEffect, useState} from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Box from "@mui/material/Box";
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import {useSelector} from "react-redux";
import {RootReducerType, useAppDispatch} from "../../state/store";
import {
    addVoluteTC,
    changeVoluteBaseAC,
    changeVoluteGeneralAC,
    VoluteType
} from "../../state/currency-reducer";
import MenuItem from '@mui/material/MenuItem/MenuItem';

function ConverterPage() {
    const baseVolute = useSelector<RootReducerType, Array<VoluteType>>(state => state.currencyReducer.items)

    const voluteBase = useSelector<RootReducerType, number>(state => state.currencyReducer.voluteBase)
    const voluteGeneral = useSelector<RootReducerType, number>(state => state.currencyReducer.voluteGeneral)
    const dispatch = useAppDispatch()

    const [voluteBas, setVoluteBas] = React.useState('RUB');
    const [volute, setVolute] = React.useState('USD');
    const [voluteGeneralLocal, setVoluteGeneralLocal] = useState<number>(voluteGeneral);

    useEffect(() => {
        const valGeneral = baseVolute.find(i => i.key === volute);
        if (valGeneral) {
            setVoluteGeneralLocal(valGeneral.value * voluteBase);
        }
    }, [baseVolute, volute, voluteBase]);

    const changeInputBas = (e: ChangeEvent<HTMLInputElement>) => {
        const newVoluteBase = +e.currentTarget.value;
        dispatch(changeVoluteBaseAC(newVoluteBase));
        setVoluteGeneralLocal(voluteGeneral * newVoluteBase);
    };

    const changeInputVolute = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeVoluteGeneralAC(+e.currentTarget.value));
    };

    const handleChange = (event: SelectChangeEvent) => {
        setVoluteBas(event.target.value as string);
        dispatch(addVoluteTC(event.target.value as string));
    };

    const handleChangeTwo = (event: SelectChangeEvent) => {
        setVolute(event.target.value as string);
    };

    return (
        <div className="convertor-page">
            <h2>Конвертер валют</h2>
            <div className="convertor-page__main">
                <div className="convert">
                    <div className="convert-block">
                        <Box sx={{width: "90%", marginLeft: "5%"}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Volute</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={voluteBas}
                                    label="voluteBas"
                                    onChange={handleChange}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 500,
                                            },
                                        },
                                    }}
                                >
                                    {baseVolute.map(i => <MenuItem value={i.key} key={i.key}>{i.key}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Box>
                        <div>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '90%', marginLeft: "5%" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="filled-basic"  variant="filled" onChange={changeInputBas} value={voluteBase}type="number" />
                            </Box>
                        </div>
                    </div>

                    <div className="convert-block">
                        <Box sx={{width: "90%", marginLeft: "5%"}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Volute</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={volute}
                                    label="Volute"
                                    onChange={handleChangeTwo}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 500,
                                            },
                                        },
                                    }}
                                >
                                    {baseVolute.map(i => <MenuItem value={i.key} key={i.key}>{i.key} : {i.value}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Box>
                        <div>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '90%', marginLeft: "5%" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="filled-basic"  variant="filled" onChange={changeInputVolute} value={voluteGeneralLocal}type="number" />
                            </Box>
                        </div>
                    </div>
                    <div className="convert-bottom-box">
                        <Box sx={{ width: "45%" }}>
                            <Skeleton sx={{ height: 50 }} />
                            <Skeleton sx={{ height: 50 }} animation="wave" />
                            <Skeleton sx={{ height: 50 }} animation={false} />
                        </Box>
                        <Box sx={{ width: "45%" }}>
                            <Skeleton sx={{ height: 50 }}/>
                            <Skeleton sx={{ height: 50 }} animation="wave" />
                            <Skeleton sx={{ height: 50 }} animation={false} />
                        </Box>
                    </div>
                </div>
                <div className="graphic">
                    <img src={process.env.PUBLIC_URL + '/assets/images/Pngtree.png'} alt=""/>
                </div>
            </div>
        </div>
    );
}
export default ConverterPage;
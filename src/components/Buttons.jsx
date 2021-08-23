import React, { useEffect, useState } from 'react';
import classes from './Button.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeToFirstTheme, changeToSecondTheme, changeToThirdTheme, changeToFourthTheme, changeToFifthTheme } from '../Redux/Actions/actions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const Buttons = () => {

    const [checked, setChecked] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    
    const dispatch = useDispatch();
    const backgroundColor = useSelector(state => state);



    const handleButtonChangeBlue = () => {
        dispatch(changeToFirstTheme())
    }
    const handleButtonChangeRed = () => {
        dispatch(changeToSecondTheme())
    }

    const handleButtonChangeYellow = () => {
        setIsChecked(!isChecked)
        dispatch(changeToThirdTheme())
    }

    const handleButtonChangeGreen = () => {
        setIsChecked(!isChecked);
        dispatch(changeToFourthTheme())
    }

    const handleButtonChangeGrey = (event) => {
        setChecked(!checked)
        dispatch(changeToFifthTheme())
      };

    const changeBackToWhite = () => {
        setIsChecked(!isChecked);
        dispatch(changeToFirstTheme())
    }

    const changeBackToFirstTheme = () => {
        setChecked(!checked);
        dispatch(changeToFirstTheme())
    }
    
    
    let borderColor = backgroundColor.buttonColor.secondary;

    return (
        <div className={classes['button-container']} style={{ borderColor}}>
            <div className={classes.button}> <Button variant="contained" color="primary" onClick={handleButtonChangeBlue}>BUTTON</Button></div>
            <div className={classes.button}> <Button variant="outlined" color="primary" onClick={handleButtonChangeRed}>BUTTON</Button> </div>
            <div className={classes.switchbox}>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onChange={() => isChecked ? changeBackToWhite() : handleButtonChangeYellow()} />
                <Checkbox indeterminate inputProps={{ 'aria-label': 'indeterminate checkbox' }} onChange={() => isChecked ? changeBackToWhite() :handleButtonChangeGreen()} />
            </div>

            <div className={classes.switchbox}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={checked}
                            onChange={() => checked ? changeBackToFirstTheme() :handleButtonChangeGrey()}
                            value={checked}
                            color="primary"
                        />
                    }
                    labelPlacement="start"
                    label={checked ? "YES" : "NO"}
                />
            </div>
        </div>
    )
}

export default Buttons;

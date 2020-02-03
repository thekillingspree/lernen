import React from 'react'
import { CirclePicker } from 'react-color';
import { connect } from 'react-redux';
import { setThemeColor } from '../actions/theme';

const ColorPicker = props => {
    return (
        <CirclePicker 
            onChangeComplete={color => {
                props.setThemeColor(color.hex)
                props.callback();
            }}
        />
    )
}

export default connect(({theme}) => ({theme}), {setThemeColor})(ColorPicker)

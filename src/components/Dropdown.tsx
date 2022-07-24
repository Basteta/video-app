import React, { Fragment} from "react";

import classes from './Dropdown.module.scss';

export interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    options: Option[];
    onSelectOption: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = (props) => {

    const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        props.onSelectOption(value);
    };

    return (
        <Fragment>
            <select onChange={selectChangeHandler} className={classes.select}>
                {props.options.map(option =>
                    <option key={option.label} value={option.value}>{option.label}</option>
                )}
            </select>
        </Fragment>
    )
}

export default Dropdown;
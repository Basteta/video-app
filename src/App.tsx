import React, {useState} from 'react';
import classes from './App.module.scss';

import Dropdown, {Option} from "./components/Dropdown";
import SearchInput from "./components/SearchInput";
import Video from "./components/Video";

function App() {
    const [query, setQuery] = useState<string>('');
    const [videoTime, setVideoTime] = useState<number>(10);
    const [videoNumber, setVideoNumber] = useState<number>(1);

    const DROPDOWN_VALUES_OF_VIDEO_NUMBERS: Option[] = [
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
        {label: "4", value: "4"},
        {label: "5", value: "5"},
        {label: "6", value: "6"},
        {label: "7", value: "7"},
        {label: "8", value: "8"},
        {label: "9", value: "9"},
        {label: "10", value: "10"}
    ];

    const DROPDOWN_VALUES_OF_VIDEO_DURATIONS: Option[] = [
        {label: "10", value: "10"},
        {label: "20", value: "20"},
        {label: "30", value: "30"}
    ]

    const numberChangeHandler = (selectedOption: string) => {
        setVideoNumber(parseInt(selectedOption));
    }

    const timeChangeHandler = (selectedOption: string) => {
        setVideoTime(parseInt(selectedOption));
    }

    return (
        <div className={classes.App}>
            <header className={classes.Header}>
                <div>
                    Video App
                </div>
            </header>
            <main className={classes.Body}>
                <div className={classes.BodyControl}>
                    <div className={`${classes.BodyGroup} ${classes.search}`}>
                        <SearchInput onChangeSearchQuery={(query) => {
                            setQuery(query);

                        }}/>
                    </div>
                    <div className={classes.BodyGroup}>
                        <span>Number of videos to play</span>
                        <Dropdown options={DROPDOWN_VALUES_OF_VIDEO_NUMBERS} onSelectOption={numberChangeHandler}/>
                    </div>
                    <div className={classes.BodyGroup}>
                        <span>Each video plays for up to</span>
                        <Dropdown options={DROPDOWN_VALUES_OF_VIDEO_DURATIONS} onSelectOption={timeChangeHandler}/>
                    </div>
                </div>
                <div className={classes.BodyVideo}>
                    {query === '' && <div className={classes.video}> </div>}
                    {query !== '' && <Video query={query} videoTime={videoTime} videoNumber={videoNumber}/>}
                </div>
            </main>
        </div>
    );
}

export default App;

import React from 'react';
import { CenterBox } from './components/CenterBox';
import { TitleText } from "./components/TitleText";
import WordForm from './components/WordForm';

class App extends React.Component {
    render() {
        return (
           <div className="mx-auto max-w-5xl w-full h-screen">
            <CenterBox>
                <TitleText/>
                <WordForm/>
            </CenterBox>
           </div> 
            
        );
    };
}

export {
    App
}
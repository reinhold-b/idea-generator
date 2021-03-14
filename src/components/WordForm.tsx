import React from 'react';
import { WORDS } from '../words/words';
import { GenerateBtn } from './GenerateBtn';
import { IdeaDisplayField } from './IdeaDisplayField';

interface WordFormState {
    wordPair: string[],
    lastWords: string[],
}

interface Props {}

export default class WordForm extends React.Component<Props, WordFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            wordPair: ['New', 'ReactApp'],
            lastWords: ['',''],
        };
    }
    generateNewWords() {
        if (this.state.wordPair[0] !== 'New') {
            this.setState({
                lastWords: this.state.wordPair,
            });
        }
        var first:string = WORDS.getRandomWord(0);
        var second:string = WORDS.getRandomWord(1);
        this.setState({
            wordPair: [first, second],
        });
    }
    render() {
        return (
            <div>
                <IdeaDisplayField firstWord={this.state.wordPair[0]} secondWord={this.state.wordPair[1]} lastWord={this.state.lastWords}/>
                <GenerateBtn onClick={()=> this.generateNewWords()}/>  
            </div>
        )
    }
}   
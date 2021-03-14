import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    onClick: MouseEventHandler,
}

interface ButtonState {}

class GenerateBtn extends React.Component<ButtonProps, ButtonState> {
    render() {
        return (
            <button 
            onClick={this.props.onClick} 
            className="appearance-none p-2 sm:p-3 md:p-4 rounded-xl w-full bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-700">
                Generate something
            </button>
        )
    }
}

export {
    GenerateBtn
}

import React from "react";


export const CenterBox: React.FC = ({children}) => {
    return (
        <div className="grid grid-rows-3 place-items-center lg:mx-20 md:mx-10 lg:my-48 md:my-10 my-4 mx-4">
            <div>{children}</div>
        </div>
    )
}

import React from 'react';

interface WordFieldProps {
  firstWord: string;
  secondWord: string;
  lastWord: string[],
}

export const IdeaDisplayField: React.FC<WordFieldProps> = ({ firstWord, secondWord, lastWord}) => {
  return (
    <div className="w-full p-4 my-6">
       <div className="flex justify-center">
        <div className="text-xs sm:text-lg md:text-xl">
            <p className="text-opacity-60 text-white">
                How about a..
            </p>
        </div>
       </div>
       <div className="flex justify-center py-4 md:py-10">
            <div className="flex-initial shadow-2xl text-lg md:text-2xl lg:text-3xl rounded-xl bg-indigo-100 text-blue-500 font-extrabold p-2 md:p-4">
              {firstWord} {secondWord}
            </div>
       </div>
       <div className="flex justify-center">
        <div className="text-xs sm:text-lg md:text-xl">
            <p className="text-opacity-60 text-white">
              <div className="flex justify-center text-color-white opacity-60 hidden md:block"><div>Last: {lastWord[0]} {lastWord[1]}</div></div>
            </p>
        </div>
       </div>
    </div>
  );
};


class WORDS {

    static firstWords = [
            'House',
            'Computer',
            'Travel',
            'Trip',
            'Animal',
            'Forest',
            'Ocean',
            'Business',
            'Stock',
            'GPS',
            'Translation',
            'Learning',
            'Language',
            'School',
            'Coding',
            'Tree',
            'Image',
            'Music',
    ];
    static secondWords = [
           'Maker',
           'Creator',
           'App',
           'Game',
           'WebApp',
    ];
       
    static getRandomWord(pos: number) : string  {
        var firstWordIndex : number = Math.floor(Math.random() * (WORDS.firstWords.length - 1) + 1);

        // calculate index mod this.secondWords.length so the index is never out of range
        var secondWordIndex: number = firstWordIndex % WORDS.secondWords.length; 

        if (pos === 0) return WORDS.firstWords[firstWordIndex];
        if (pos === 1) return WORDS.secondWords[secondWordIndex];
        else return '';
    }
    
}

export { WORDS }
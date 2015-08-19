let __commonNameMap = {};

export class Animal {
    constructor() {
    }

    get sound() {
        return 'I am an imaginary Animal';
    }

    makeSound() {
        console.log(this.sound);
    }
}

@Colloquial('Mutt', 'Pooch', 'Puppy')
@TailConveysEmotion({
    happy: 'wagging',
    sad: 'lowered',
    alert: 'pointed',
    frightened: 'between legs'

})
@HasLegs(4)
@Domestic
export class Dog extends Animal {
    get sound() {
        return String.raw`Woof Woof!`;
    }
}


export class Labrador extends Dog {}

function Colloquial(...commonNames) {

    return function(target) {
        for (let c of commonNames) {
            __commonNameMap[c] = target;
        }
    };
}

function Domestic(Klass) {
    Object.defineProperty(Klass, 'isDomestic', {
        configurable: false,
        writable: false,
        value: true
    });
}

function HasLegs(numLegs) {
    return function(Klass) {

        Object.defineProperties(Klass.prototype, {

            __legs: {
                configurable: false,
                enumerable: false,
                writable: true,
                value: numLegs
            },

            legs: {
                configurable: false,
                get() {
                    return this.__legs;
                }
            },

            loseLeg: {
                configurable: false,
                value() {
                    this.__legs = this.__legs - 1;
                }
            }

        });
    };
}

function TailConveysEmotion(tailStates) {
    return function(Klass) {
        Object.defineProperties(Klass.prototype, {
            tailState: {
                configurable: false,
                get() {

                    return tailStates[this.__emotion];
                },
                set() {
                    throw new Error('You can not decide whether tail should wag. Make dog happy.');
                }
            },

            __emotion: {
                configurable: false,
                enumerable: false,
                writable: true
            }
        });

        for (let e of Object.keys(tailStates)) {
            let titleCaseName = e.charAt(0).toUpperCase() + e.substr(1);
            let fnName = String.raw`make${titleCaseName}`;

            (function(fName, emotion) {
                Object.defineProperty(Klass.prototype, fName, {
                    configurable: false,
                    writable: false,
                    value() {
                        this.__emotion = emotion;
                    }
                });
            })(fnName, e);
        }
    };
}

export function fromColloquial(commonName) {
    return __commonNameMap[commonName];
}

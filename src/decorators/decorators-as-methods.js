export const NEW_FRUIT_MSG = 'Juicer got a new fruit!';
export const FRUIT_CONSUMED_MSG = 'Fruit pulped. Closing lid.';

class ConveyerBelt {

    constructor() {
        this.__fruitMap = {};
        this.__fruitName = null;
    }

    target(Klass) {
        let that = this;
        let constructorFn = Klass.prototype.constructor;

        Object.defineProperties(Klass.prototype, {

            constructor: {
                value() {
                    console.log('Inside modified constructor');
                    let instance = constructorFn.apply(this, arguments);
                    that.__juicer = instance;
                    return instance;
                }
            },

            currentFruit: {
                enumerable: true,
                configurable: false,
                get() {

                    return that.__fruitMap[that.__fruitName];
                }
            }
        });
    }

    pile(pileName) {
        var that = this;

        return function(Klass) {
            that.__fruitMap[pileName] = Klass;
        };
    }

    beforeDrop(target, name, desc) {
        this.__beforeDrop = desc.value;
    }

    afterDrop(target, name, desc) {
        this.__afterDrop = desc.value;
    }

    takeFromPile(pileName) {
        this.__beforeDrop.apply(fastBelt.__juicer);
        this.__fruitName = pileName;
        this.__afterDrop.apply(fastBelt.__juicer);
    }
}


var fastBelt = new ConveyerBelt();


class Fruit {}

@fastBelt.pile('oranges')
class Orange extends Fruit {
    juice() {
        console.log('Orange Juice!!!');
    }
}

@fastBelt.pile('lemons')
class Lemon extends Fruit {
    juice() {
        console.log('Lemon Juice!!!');
    }
}


@fastBelt.pile('watermelons')
class Watermelon extends Fruit {
    juice() {
        console.log('Watermelon Juice!!!');
    }
}

@fastBelt.target
export class Juicer {

    @fastBelt.beforeDrop
    openLid() {
        console.log(NEW_FRUIT_MSG);
    }

    makeJuice() {
        var SomeJuicyFruit = this.currentFruit;
        var fruit = new SomeJuicyFruit();
        fruit.juice();
    }

    @fastBelt.afterDrop
    closeLid() {
        console.log(FRUIT_CONSUMED_MSG);
    }
}


export function take(pileName) {
    fastBelt.takeFromPile(pileName);
}

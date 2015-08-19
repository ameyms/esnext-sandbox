# Decorators

> Current status: **Proposal**

## 1. Class decorators
#### Recipes

* [Keeping track of the classes they were applied on](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/class-decorators.js#L16)
* [Adding a predefined set of properties and methods to class](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/class-decorators.js#L17-L23)
* [Dynamically generating properties or methods for a class](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/class-decorators.js#L24)

#### Quick example
```js

@HasLegs(4)
@Domestic
export class Dog extends Animal {
    get sound() {
        return 'Woof Woof!';
    }
}

let fido = new Dog();
Dog.isDomestic // true
fido.legs // 4
```
<br/>

## 2. Property decorators
#### Recipes

* [Altering the property descriptor](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/property-decorators.js#L3)
* [Automatically catching & logging errors](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/property-decorators.js#L6)

#### Quick example
```js
// life-universe-everything.js

var LifeUniverseAndEverything = {
    @unchangeable
    @secret
    answer: 42
}

LifeUniverseAndEverything.answer = 3.14; // ERROR!!!
Object.keys(LifeUniverseAndEverything) // []


```

## Further Reading
- [Yehuda Katz's article on Github](https://github.com/wycats/javascript-decorators)
- [Addy Osmani's post on Medium](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)

<br/>

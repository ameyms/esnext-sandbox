# Decorators

> Current status: **Proposal**

## 1. Class decorators
#### Recipes

* Keeping track of the classes they were applied <small>[
 [Source](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/class-decorators.js#L16) | [Test](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/__tests__/class-decorators-test.js#L41-L54) ]</small>
* Adding a predefined set of properties and methods to class <small>[ [Source](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/class-decorators.js#L17-L23) | [Test](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/__tests__/class-decorators-test#L26-L39) ]</small>
* Dynamically generating properties or methods for a class <small>[ [Source](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/class-decorators.js#L24) | [Test](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/__tests__/class-decorators-test#L57-L85) ]</small>

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

* Altering the property descriptor <small>\[ [Source](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/prop-decorators.js#L3) | [Tests](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/__tests__/prop-decorators-test.js#L17-L19) \]</small>
* Automatically catching & logging errors <small>\[ [Source](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/prop-decorators.js#L6) | [Tests](https://github.com/ameyms/esnext-sandbox/blob/master/src/decorators/__tests__/prop-decorators-test.js#L27-L49) \]</small>

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

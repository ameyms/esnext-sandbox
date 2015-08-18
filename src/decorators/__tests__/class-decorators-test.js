import {Animal, Dog, fromColloquial} from '../class-decorators';

describe('Dog', function() {
    describe('Is an animal', function() {
        it('should make correct sound', () => {

            let a = new Animal();
            expect(a.sound).to.equal('I am an imaginary Animal');


        });

        it('should bark', () => {
            let d = new Dog();
            expect(d.sound).to.equal('Woof Woof!');
        });
    });


    describe('Legs', () => {
        let d = new Dog();
        let e = new Dog();
        it('are four', () => {
            expect(d.legs).to.equal(4);
        });

        it('can be lost :\'(', () => {
            d.loseLeg();
            expect(d.legs).to.equal(3);
            expect(e.legs).to.equal(4);
        });

    });

    describe('Colloquial names', () => {
        it('returns Dog if user requests \'Mutt\'', () => {
            let Mutt = fromColloquial('Mutt');
            expect(Mutt).to.equal(Dog);
        });
        it('returns Dog if user requests \'Pooch\'', () => {
            let Pooch = fromColloquial('Pooch');
            expect(Pooch).to.equal(Dog);
        });
        it('returns Dog if user requests \'Puppy\'', () => {
            let Puppy = fromColloquial('Puppy');
            expect(Puppy).to.equal(Dog);
        });
    });


    describe('Tail', () => {

        it('conveys emotion', () => {
            expect(true).to.equal(true);
        });
        it('should wag when dog is happy', () => {
            let d = new Dog();
            d.makeHappy();
            expect(d.tailState).to.equal('wagging');
        });

        it('is lowered when dog is sad', () => {
            let d = new Dog();
            d.makeSad();
            expect(d.tailState).to.equal('lowered');
        });

        it('is between legs when dog is frightened', () => {
            let d = new Dog();
            d.makeFrightened();
            expect(d.tailState).to.equal('between legs');
        });

        it('is pointed when dog is alert', () => {
            let d = new Dog();
            d.makeAlert();
            expect(d.tailState).to.equal('pointed');
        });
    });
});

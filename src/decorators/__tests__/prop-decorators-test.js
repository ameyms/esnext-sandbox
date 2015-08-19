import sinon from 'sinon';
import LifeUniverseAndEverything from '../prop-decorators';

describe('Property decorators', () => {
    var dummyLog, sandbox;


    describe('Answer to life, universe and everything', () => {
        it('should be 42', () => {
            expect(LifeUniverseAndEverything.answer).to.equal(42);
        });

        it('can never change', () => {
            expect(() => LifeUniverseAndEverything.answer = 0).to.throw();
        });

        it('is a secret mystery', () => {
            expect(Object.keys(LifeUniverseAndEverything)).to.not.include('answer');
        });

        describe('Computer', () => {

            beforeEach(() => {

            });

            it('never fails', () => {

                sandbox = sinon.sandbox.create();
                dummyLog = sandbox.stub(console, 'log');

                expect(() => LifeUniverseAndEverything.compute()).to.not.throw();

                sandbox.restore();
            });

            it('correctly logs errors', () => {

                sandbox = sinon.sandbox.create();
                dummyLog = sandbox.stub(console, 'log');

                LifeUniverseAndEverything.compute();

                let loggedParams = dummyLog.getCall(0).args;

                expect(loggedParams[1]).to.equal('compute');
                expect(loggedParams[2]).to.be.an('Error');
                sandbox.restore();
            });

            it('will log errors', () => {
                expect(LifeUniverseAndEverything.compute.willLogOnError).to.be.true;
            });
            afterEach(() => 42);
        });

    });

});

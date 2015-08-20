import {take, Juicer, NEW_FRUIT_MSG, FRUIT_CONSUMED_MSG} from '../decorators-as-methods';
import sinon from 'sinon';

describe('Methods as decorators', () => {
    describe('Juicer', () => {
        var juicer, sandbox, dummyLog;

        beforeEach(() => {
            juicer = new Juicer();
        });

        beforeEach(() => {
            sandbox = sinon.sandbox.create();
            dummyLog = sandbox.stub(console, 'log');


            take('oranges');
            juicer.makeJuice();

            take('lemons');
            juicer.makeJuice();

            take('watermelons');
            juicer.makeJuice();

            sandbox.restore();

        });

        it('opens hatch for new fruit', () => {
            expect(dummyLog.getCall(0).args[0]).to.equal(NEW_FRUIT_MSG);
            expect(dummyLog.getCall(3).args[0]).to.equal(NEW_FRUIT_MSG);
            expect(dummyLog.getCall(6).args[0]).to.equal(NEW_FRUIT_MSG);
        });

        it('should change pile', () => {

            expect(dummyLog.getCall(2).args[0]).to.equal('Orange Juice!!!');
            expect(dummyLog.getCall(5).args[0]).to.equal('Lemon Juice!!!');
            expect(dummyLog.getCall(8).args[0]).to.equal('Watermelon Juice!!!');

        });

        it('closes lid after each fruit is dropped', () => {

            expect(dummyLog.getCall(1).args[0]).to.equal(FRUIT_CONSUMED_MSG);
            expect(dummyLog.getCall(4).args[0]).to.equal(FRUIT_CONSUMED_MSG);
            expect(dummyLog.getCall(7).args[0]).to.equal(FRUIT_CONSUMED_MSG);

        });

        afterEach(() => 42);
    });
});

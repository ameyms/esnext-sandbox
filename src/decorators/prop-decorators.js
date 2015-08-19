export default {
    @unchangeable
    @secret
    answer: 42,

    @logOnError('Oops! It failed')
    compute(wrongInput=true) {
        if (wrongInput) {
            throw new Error('');
        }
    }
};

function logOnError(msg) {

    return function(target, name, desc) {

        let fn = desc.value;

        desc.value = function() {
            try {
                fn.apply(target, arguments);
            } catch (e) {
                console.log(msg, name, e);
            }
        };

        desc.value.willLogOnError = true;

        return desc;
    };
}

function secret(target, name, desc) {
    desc.enumerable = false;
    return desc;
}

function unchangeable(target, name, desc) {
    desc.writable = false;
    return desc;
}

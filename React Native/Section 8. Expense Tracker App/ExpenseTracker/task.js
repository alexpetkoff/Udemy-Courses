const counter = (function counter() {
    let value = 0;

    return {
        getValue: function () {
            return value;
        },
        changeBy: function (k) {
            value += k;
        }
    }
})();

function stepCounter(counter, k) {
    return {
        increment() {
            counter.changeBy(k);
        },

        decrement() {
            counter.changeBy(-k);
        },
        getValue() {
            return counter.getValue();
        }
    }
}

const stepC = stepCounter(counter, 10);

stepC.increment()
stepC.increment()
stepC.increment()
stepC.increment()
stepC.decrement()
console.log(stepC.getValue())


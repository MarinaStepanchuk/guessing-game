class GuessingGame {
    constructor() {
        this.num = 0;
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.num = Math.ceil((this.max - this.min) / 2 + this.min);
    }

    lower() {
        this.max = this.num;
    }

    greater() {
        this.min = this.num;
    }
}

module.exports = GuessingGame;

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.find(i => i.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({time, callback, canCall: true});
    }
     removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(i => i.time !== time)
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }
    start() {
        if(this.intervalId !== null) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(i => {
                    if(i.time == this.getCurrentFormattedTime() && i.canCall == true) {
                        i.canCall = false;
                        i.callback();
                    }
                })
            }, 1000);
        }
    }
    stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(i => i.canCall = true);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if ((time === null) || (callback === null)) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.some(alarmTime)) {
            console.warn('Уже присутствует звонок на это же время')
        } else {
            this.alarmCollection.push({callback, time, canCall: true});
        }
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarms) => alarms !== time);
    }
     getCurrentFormattedTime() {
        let currentTime = new Date();
        let currentFormattedTime = currentTime.toLocaleTimeString("ru-Ru", { hour: '2-digit', minute: '2-digit'});
        return currentFormattedTime;
    }
    start() {
        if(this.intervalId !== undefined) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((i) => {
                    if(i.time == getCurrentFormattedTime() && i.canCall == true) {
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
        this.alarmCollection.forEach((i) => {
            i.canCall = true;
        })
    }
    cleanAlarms() {
        stop();
        this.alarmCollection = [];
    }
}

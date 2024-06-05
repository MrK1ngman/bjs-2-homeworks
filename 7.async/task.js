class AlarmClock {
    alarmCollection = [];
    intervalId = null;
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }
    addClock(alarmTime, func) {
        if (alarmTime || func == undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.some(alarmTime)) {
            console.warn('Уже присутствует звонок на это же время')
        } else {
        let alarm = {
            callback: func,
            time: alarmTime,
            canCall: true
        };
        this.alarmCollection.push(alarm);
        }
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarms) => alarms !== time);
    }
    getCurrentFormattedTime() {
        let currentTime = new Date();
        hours = currentTime.getHours();
        minutes = currentTime.getMinutes();
        return '${hours}:${minutes}';
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

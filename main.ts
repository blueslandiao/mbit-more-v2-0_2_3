MbitMore.onReceivedNumberWithLabel("music01", function (numberData) {
    switch (numberData%10){
        case 0: music.playTone(Tone[Math.floor(numberData / 10) - 1], music.beat(BeatFraction.Whole));
            break;
        case 1: music.playTone(Tone[Math.floor(numberData / 10)  - 1], music.beat(BeatFraction.Half));
            break;
        case 2: music.playTone(Tone[Math.floor(numberData / 10)  - 1], music.beat(BeatFraction.Quarter));
            break;
        case 3: music.playTone(Tone[Math.floor(numberData / 10)  - 1], music.beat(BeatFraction.Eighth));
            break;
        case 4: music.playTone(Tone[Math.floor(numberData / 10)  - 1], music.beat(BeatFraction.Sixteenth));
            break;
        case 5: music.playTone(Tone[Math.floor(numberData / 10)  - 1], music.beat(BeatFraction.Double));
            break;
        case 6: music.playTone(Tone[Math.floor(numberData / 10)  - 1], music.beat(BeatFraction.Breve));
            break;
    }
})
MbitMore.onReceivedNumberWithLabel("wukong05", function (numberData) {
    switch (numberData) {
        case 0: wuKong.stopMotor(wuKong.MotorList.M1); break;
        case 1: wuKong.stopMotor(wuKong.MotorList.M2); break;
        default: wuKong.stopMotor(wuKong.MotorList.M1); break;
    }
})
MbitMore.onReceivedNumberWithLabel("wukong01", function (numberData) {
    switch(numberData){
        case 0: wuKong.setLightMode(wuKong.LightMode.BREATH);break;
        case 1: wuKong.setLightMode(wuKong.LightMode.OFF); break;
    }
})
MbitMore.onReceivedNumberWithLabel("wukong02", function (numberData) {
    if (numberData > 100) {
        numberData = 100
    } else if (numberData <= 0) {
        numberData = 0
    }
    wuKong.lightIntensity(numberData)
})
MbitMore.onReceivedNumberWithLabel("wukong03", function (numberData) {
    wuKong.setMotorSpeed(Math.floor(numberData / 10000) == 1 ? wuKong.MotorList.M1 : wuKong.MotorList.M2,
        (Math.floor((numberData % 1000) / 100)) == 1 ? numberData % 100 : -numberData % 100);
})
MbitMore.onReceivedNumberWithLabel("wukong04", function (numberData) {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, Math.floor((numberData % 10000) / 1000) ? (numberData % 10000) % 100 : -(numberData % 10000) % 100)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, Math.floor((numberData / 10000) / 1000) ? Math.floor(numberData / 10000) % 100 : -Math.floor(numberData / 10000) % 100)
})
MbitMore.onReceivedNumberWithLabel("wukong07", function (numberData) {
    wuKong.setServoAngle(Math.floor(numberData / 10000) - 1, Math.floor(numberData / 1000) % 10, numberData % 1000);
})
MbitMore.onReceivedNumberWithLabel("wukong06", function (numberData) {
    wuKong.stopMotor(wuKong.MotorList.M1)
    wuKong.stopMotor(wuKong.MotorList.M2)
})
let Tone = [
131,
139,
147,
156,
165,
175,
185,
196,
208,
220,
233,
247,
262,
277,
294,
311,
330,
349,
370,
392,
415,
440,
466,
494,
523,
554,
584,
622,
659,
698,
740,
784,
831,
880,
932,
988
]
MbitMore.startService()

import { Operator } from "./operator";

export type MeteoriteAnimationParams = {
    fromTop: number;
    fromLeft: number;
    toTop: number;
    toLeft: number;
    rotation: number;
    timingMs: number;
    operator: Operator;
    fromTopOffset: number;
    fromLeftOffset: number;
    toTopOffset: number;
    toLeftOffset: number;
}

export type RocketLaunchParameters = {
    timingMs: number;
    operator: Operator;
    distance: number;
}

export type RocketSmokeAnimationParameters = {
    timingMs: number;
    distance: number;
    offset: number;
    operatorX: Operator;
    operatorY: Operator;
}

export type FadeAnimationParameters = {
    delayMs: number;
    timingMs: number;
}
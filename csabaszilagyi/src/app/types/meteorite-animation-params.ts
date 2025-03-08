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
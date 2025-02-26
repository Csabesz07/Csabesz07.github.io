export type MeteoriteAnimationParams = {
    fromTop: number;
    fromLeft: number;
    toTop: number;
    toLeft: number;
    rotation: number;
    timingMs: number;
    operator: '+' | '-';
    fromTopOffset: number;
    fromLeftOffset: number;
    toTopOffset: number;
    toLeftOffset: number;
}
import { Operator } from "./operator";

export type RocketLaunchParameters = {
    timingMs: number;
    operator: Operator;
    distance: number;
}
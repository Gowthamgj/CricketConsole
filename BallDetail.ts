export interface BallDetail{
    runsScored: number,
        isOut: boolean,
        dismissalType?: string,
        dismissalInfo?:dismiss,
        isExtra?: boolean,
        extraType?: string,
        extraInfo?: extra,
        batsmanName: string,
        bowlerName: string
}
interface dismiss{
    fielderName?: string|undefined,
    hasBatsmanCrossed?: boolean|undefined,
}
interface extra{
    runsOffered:number
}
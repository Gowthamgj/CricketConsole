import { Player } from './player';
import {DismissalInfo} from './dismissalInfo'
export class Batsman extends Player {
    private numberOfRunsScored: number;
    private numberOfBallsFaced: number;
    private isOut:boolean;
    private dismissalType:string|null;
    private dismissalInfo:DismissalInfo;

    constructor(name: string) {
        super(name);
        this.numberOfRunsScored = 0;
        this.numberOfBallsFaced = 0;
        this.isOut=false;
        this.dismissalType=null;
        this.dismissalInfo=new DismissalInfo();
    }
    get numberOfRuns() {
        return this.numberOfRunsScored;
    }
    get numberOfBallsBatted() {
        return this.numberOfBallsFaced;
    }
    addRuns(run: number) {
        this.numberOfRunsScored += run;
        this.numberOfBallsFaced+=1;
    }
    get outStatus(){
        return this.isOut;
    }
    get outType(){
        return this.dismissalType;
    }
    get outInfo(){
        return this.dismissalInfo;
    }
    changeStatus(out:boolean,type:string,fname:string,bname:string){
        this.isOut=out;
        this.dismissalType=type;
        //this.numberOfBallsFaced+=1;
        // console.log(fname+bname)
        this.dismissalInfo.fixOutInfo(fname,bname);
    
    }
}
import { Player } from "./player";

export class Bowler extends Player{
   private oversBowled:number;
   private maidenOvers:number;
   private runsConsider:number;
   private wicketsTaken:number;
       constructor(name:string)
       {
           super(name);
           this.oversBowled=0;
           this.runsConsider=0;
           this.maidenOvers=0;
           this.wicketsTaken=0;
        }
        get bowledOver(){
            return this.oversBowled;
        }
        get maidenOver(){
            return this.maidenOvers;
        }
        get considerRuns(){
            return this.runsConsider;
        }
        get wickets(){
            return this.wicketsTaken;
        }
        addOvers(){
            this.oversBowled+=1;
            
        }
        addMaiden(){
            this.maidenOvers+=1;
        }
        addbowlerRuns(runs:number){
            this.runsConsider+=runs;
        }
        addwicketsTaken(){
            this.wicketsTaken+=1;
        }
}
export class DismissalInfo{
    private fielderName:string|null;
    private bowlerName:string|null;
    constructor(){
        this.fielderName=null;
        this.bowlerName=null;
    }
    get fname(){
        return this.fielderName;
    }
    get bname(){
        return this.bowlerName;
    }
    fixOutInfo(fname:string,bname:string){
        this.fielderName=fname;
        this.bowlerName=bname;
    }
}
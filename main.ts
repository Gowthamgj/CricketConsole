import { Batsman } from './batsman';
import { Scorer } from './scorer';
import {Bowler} from './bowler';
import { BallDetail } from './BallDetail';
const scorer = new Scorer();
var ballCount=1;

var given:Array<BallDetail>=[
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Run Out',
        dismissalInfo: {
            fielderName: 'Root',
            hasBatsmanCrossed: true,
        },
        batsmanName: 'Rahul',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },{
        runsScored: 6,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Anderson'  
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Anderson'  
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'  
     },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'  
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Butcher',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Rohit',
        bowlerName: 'woakes'  
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'woakes'
    },
     {
        runsScored: 3,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'woakes'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 0,
        isOut: false,
        isExtra: true,
        extraType: 'byes',
        extraInfo: {
            runsOffered: 2
        },
        batsmanName: 'Yuvraj',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 3,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 3,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },{
        runsScored: 0,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Mooen'
    },{
        runsScored: 0,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Mooen'
    },{
        runsScored: 0,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Mooen'
    },{
        runsScored: 0,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Mooen'
    },{
        runsScored: 0,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Mooen'
    },{
        runsScored: 0,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Mooen'
    },
    ];
    let set1 = new Set();
given.forEach((ball)=>{
 set1.add(ball.batsmanName);
});
function check(ele:Bowler){
    return ele.playerName==currentBowler.playerName;
}
const battingOrder = set1[Symbol.iterator]();
const batsman1=new Batsman(battingOrder.next()['value']);
const batsman2=new Batsman(battingOrder.next()['value']);
var currentBowler:Bowler
 currentBowler= new Bowler(given[0].bowlerName);

currentBowler.addOvers();
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);
given.forEach((ball)=>{
    if(currentBowler.playerName!=ball.bowlerName){
        if(!scorer.bowlingOrder.find(check)){
            scorer.bowlingOrder.push(currentBowler);                    
        }
        currentBowler = new Bowler(ball.bowlerName); 
        if(scorer.bowlingOrder.find(check)!==undefined){
            currentBowler=scorer.bowlingOrder.find(check);
        }
        currentBowler.addOvers();
    }
    if(ball.isOut===false){
        if(ball.isExtra){
            if(ball.extraType=='wide' || ball.extraType=='Noball'){
                scorer.totalScore+=ball.extraInfo.runsOffered;
                currentBowler.addbowlerRuns(ball.extraInfo.runsOffered);
            }
            else{
                scorer.totalScore+=ball.extraInfo.runsOffered;
                currentBowler.addbowlerRuns(ball.extraInfo.runsOffered);
                scorer.addBallCount();
             }
            // ballCount--;
        }
        else{
             scorer.calculateScore(ball.runsScored,ballCount,currentBowler);        
        }
    }
    else if(ball.isOut===true){
        scorer.totalWickets++;
        //console.log("true block"+ball.runsScored);
        scorer.calculateScore(ball.runsScored,ballCount,currentBowler);
        scorer.outStatus(ball.isOut,ball.dismissalType,ball.dismissalInfo.fielderName,ball.bowlerName);           
        const batsman1=new Batsman(battingOrder.next()['value']);
        scorer.insertNewPlayer(batsman1);
        if(ball.dismissalInfo.hasBatsmanCrossed===true){
            scorer.swap();
        }
        if(ball.dismissalType!="Run Out"){
            currentBowler.addwicketsTaken();
        }  
    }
    ballCount++;
});
scorer.bowlingOrder.push(currentBowler);
scorer.printScore();

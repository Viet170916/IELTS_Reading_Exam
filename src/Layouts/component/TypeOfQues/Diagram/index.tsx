import classNames from "classnames";
import Answer from "../../../../model/Answer";

function Diagram(props:any){
    let finalScore: number = 0;
    props.finalScore = finalScore;
    let ans: Answer[] = props.ans;
    let finalAnswer: string[] = props.finalAnswer;
    let score: number = props.score;


    return (
        <div className={classNames("diagram")}>


        </div>
    );
}
export default Diagram;
import "./css/multipleChoices.css"
import {useState} from "react";
import classNames from "classnames";
import Answer from "../../../model/Answer";
import "../../commonCSS/commonCSS.css"
import RadioInput from "../inputComponents/radioInput";

export default function MultipleChoices(props: any): JSX.Element {
    const [finalScores, setFinalScore] = useState(0);

    let finalScore: number = finalScores;
    let ans: Answer[] = props.ans;
    let finalAnswer: string[] = props.finalAnswer;
    let score: number = props.score;


    // let value: string;
    const [checked, setChecked] = useState(-1);

    let indexChecked: number;

    function calculateTheFinalScore() {
        console.log(finalAnswer[0] + " " + indexChecked)
        finalScore = Number(finalAnswer[0]) === indexChecked ? score : 0;
    }

    return <div className={classNames("multiChoice", "scroll-table", "table")}>
        {ans.map((value, index) =>
            <div className="checkBox" key={index}

            >
                <RadioInput ID={"checkBox_" + index + value.ID} checked={checked === index} value={index} onChange={() => {
                    setChecked(index);
                    indexChecked = index;
                    calculateTheFinalScore();
                    console.log(finalScore);
                    props.finalScore = finalScore;
                    setFinalScore(finalScore);
                    props.func();
                }}/>
                <p style={{"color": checked === index ? "#6D5DFCFF":"" }}>
                    {value.ans}
                </p>
            </div>)}
    </div>


}

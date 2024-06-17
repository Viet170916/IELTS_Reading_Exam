import "./css/Write.css";

import "../../commonCSS/commonCSS.css";

import {useState} from "react";
// import classNames from "classnames";

import Answer from "../../../model/Answer";
// import {uuid} from "../../../mockData/mockData";
import AddTextBoxes from "./AddTextBoxes";
// import {Exception} from "sass";

export function Write(props: any) {
    let finalScore: number = 0;
    props.finalScore = finalScore;
    let ans: Answer[] = props.ans;
    let finalAnswer: string[] = props.finalAnswer;
    let score: number = props.score;
    let [txtOut, setTextOut] = useState(ans.map((each) => {
                let ansTerm = splitTextWithInputBox(each.ans);
                ansTerm.pop();
                return ansTerm.map((e) => {
                        return "";
                    }
                )
            }
        )
    );

    function splitTextWithInputBox(text: string): string[] {
        try {
            return text.split("__");
        } catch (e: any) {
        }
        return [text];
    }

    function calculateTheFinalScore() {
        let i = 0;
        ans.map((each, parentIndex) => splitTextWithInputBox(each.ans).map((ansSplit, index) => {
            return finalAnswer[i++] === txtOut[parentIndex][index] ? score / finalAnswer.length : 0
        }))
    }

    return (
        <div className="write">
            <ul>

                {ans.map(
                    (ques, indexParent) => {
                        return (
                            <li key={indexParent}>
                                <AddTextBoxes
                                    props={{
                                        answers: txtOut[indexParent],
                                        onBlur: function () {
                                            calculateTheFinalScore();
                                            props.finalScore = finalScore;
                                            props.func();
                                        },
                                        onChange: function () {
                                            setTextOut([...txtOut.slice(0, indexParent), this.answers, ...txtOut.slice(indexParent + 1)]);
                                        },
                                    }}
                                    key={indexParent}
                                >
                                    {ques.ans}
                                </AddTextBoxes>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
}

export default Write;

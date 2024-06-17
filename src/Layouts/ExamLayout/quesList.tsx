import './css/quesList.css';

import Question from "../../model/Question";

import React, {useState} from "react";

import QuestionCard from "../component/QuestionCard";
import ListChangeQuestion from "../ListChangeQuestion";
import EssayTransfer from "../component/essayTransfer";

import MultipleChoices from "../component/TypeOfQues/multipleChoices";
import CheckBox from "../component/TypeOfQues/CheckBox";
import Write from "../component/TypeOfQues/Write";
import Drag from "../component/TypeOfQues/Drag";
import dragType2 from "../component/TypeOfQues/DragType2";
import QuesBlock from "./quesBlock";
import Essay from "../../model/Essay";
import TreeQues from "../component/TypeOfQues/TreeQues";
import classNames from "classnames";

let list: Question[] = [];
let essayList: Essay[] = [];
let finalScore: number = 0;
let finalScoreArr: number[] = [];
let typeList: (((prop: any) => JSX.Element))[] = [MultipleChoices, CheckBox,MultipleChoices, Write, Drag, dragType2, dragType2, Write,Write,TreeQues];
export function setList(qlist: Question[], eList: Essay[]) {
    list = qlist;
    essayList = eList;
}
function QuesList(props: any) {
    const [state2, setState2] = useState(0);
    const [quesType, setQuesType] = useState(list[state2].type);
    function calculateTheFinalScore(index: number, score: number) {
        finalScoreArr[index] = score;
        finalScore = finalScoreArr.reduce((total, curVal) => total + curVal);
    }
    return (
        <div className={props.cName}>
            <ListChangeQuestion list={list} state ={ state2} onClick ={ (index: number, type: number) => {
                setState2(index);
                setQuesType(type);
                console.log("the FinalScore: "+finalScore);
            }}/>
            <div className={classNames("answerBlock",)}>
                <div className="background">
                    {/* eslint-disable-next-line array-callback-return */}
                    {list.map((value, index) => {
                        let AnsType: JSX.Element = typeList[value.type]({
                            ans: value.answer,
                            finalAnswer: value.finalAnswer,
                            score: value.score,
                            finalScore: 0,
                            quesNum: index,
                            ID: value.ID,
                            note: value.note,
                            func: function () {
                                calculateTheFinalScore(index, this.finalScore)
                                console.log("this is the final score: " + finalScore);
                            }
                        });
                        if (value.type === quesType) {
                            return (
                                <div key={value.ID}>
                                    <QuestionCard
                                        className={["ansBox", state2 === index ? "" : "disappear", ]}
                                        index={index}
                                        onSetState={() => setState2(index)}
                                        questionText={value.ques}
                                    >
                                        {AnsType}
                                    </QuestionCard>
                                    {(value.type === 4) || (state2 !== index) ? <></> : <QuesBlock>
                                        <EssayTransfer>
                                            {essayList[value.type].essay}
                                        </EssayTransfer>
                                    </QuesBlock>}
                                </div>
                            );
                        }
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default QuesList;
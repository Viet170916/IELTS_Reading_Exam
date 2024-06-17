import "./ExamLayout/css/quesList.css";

import classNames from "classnames";
import React from "react";
import Question from "../model/Question";
import {uuid} from "../mockData/mockData";

function ListChangeQuestion(props: any) {
    let list: Question[] = props.list;
    let nextQuestion = 0;
    return (
        <div className={classNames("quesList", "components")}>
            <div className={classNames("select-area", "inner-box")}>
                <div className="roundSelectQuesBox">
                    {list.map(
                        (value, key) => {
                            return (
                                <div key={uuid()}
                                     className={classNames("selectQuesBox", props.state === key ? "active" : "components-smaller-shadow")}
                                     onClick={() => {
                                         props.onClick(key, value.type);
                                     }}>
                                    {(nextQuestion = nextQuestion + 1) + (value.type === 1 || value.type > 2 ? "-" + (nextQuestion = nextQuestion - 1 + value.finalAnswer.length) : "")}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classNames("submit-area", "inner-box")}>
                <div className={classNames("submit-button", "btn__primary", "btn")}>
                    {"Submit"}
                </div>
            </div>
        </div>
    );
}

export default ListChangeQuestion;
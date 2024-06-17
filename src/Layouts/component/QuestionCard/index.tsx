import classNames from "classnames";
import React from "react";

function QuestionCard(props: any) {
    return (
        <div className={classNames("quesBox")}>
            <div className={classNames("questionTag", "btn", "btn__primary")} onClick={props.onSetState}>
                {(props.index + 1) + ". " + props.questionText}
            </div>
            <div
                className={classNames(...props.className, "components", "index-z-is-under")} style={{"zIndex": "0"}}>
                <div className={classNames("inner-ques-box")}>
                    {props.children}
                </div>
            </div>
            <br/>
        </div>
    );
}

export default QuestionCard;
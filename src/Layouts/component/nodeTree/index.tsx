import AddTextBoxes from "../TypeOfQues/AddTextBoxes";
import classNames from "classnames";
import answer from "../../../model/Answer";
import {useState} from "react";
import Answer from "../../../model/Answer";


function Tree(props: any) {

    let children: string[] = [];
    let text: string = "";
    let [answers, setAns] = useState([""]);

    function findChildren(data: string) {
        text = data.split("[", 2)[0];
        console.log(("[" + data.split("[", 2)[1]))
        try {
            children = JSON.parse(("[" + data.split("[", 2)[1]));
        }catch (e:any){}

    }

    findChildren(props.ans);
    return (
        <>
            <div className={classNames("node")}>
                <AddTextBoxes props={{
                    answers: answers,
                    onBlur: () => {

                    },
                    onChange: function () {
                        setAns(this.answers);
                    },
                }}>
                    {text}

                </AddTextBoxes>
            </div>
            {
                children.length !==0?children.map((node, index) => {
                    return (<div key={index}>
                        <Tree ans={node}>

                        </Tree>
                    </div>);
                }):<></>
            }
        </>
    );
}


export default Tree;
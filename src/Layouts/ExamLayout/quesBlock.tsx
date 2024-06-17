import './css/quesBlock.css'
import classNames from "classnames";
import "../commonCSS/components.css"

function QuesBlock(props: any) {
    return (
        <div className={classNames("quesBlock", "components")}>
            <div className={classNames("content", "td", "inner-box")}>
                <div className={classNames("content-child","scrollbar-purple")}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default QuesBlock;
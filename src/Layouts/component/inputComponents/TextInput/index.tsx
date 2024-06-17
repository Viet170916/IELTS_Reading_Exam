import classNames from "classnames";
import {useState} from "react";

function TextInput2(prop: any) {
    const [text, setText] = useState(prop.value);
    return (
        <div className="form">
            <input
                id={prop.ID}
                className={classNames("textBox", "form__input")}
                value={text}
                type="text"
                // onBlur={prop.onBlur(text)}
                placeholder="Your answer"
                onChange={(event) => {
                    setText(event.target.value);
                }}/>
        </div>
    );
}
export default TextInput2;
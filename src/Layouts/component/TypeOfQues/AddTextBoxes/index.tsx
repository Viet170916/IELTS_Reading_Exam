import classNames from "classnames";
import { uuid } from "../../../../mockData/mockData";

function AddTextBoxes( props: any ):JSX.Element{
				function splitTextWithInputBox( text: string ): string[]{
								try{
												return text.split( "__" );
								}catch( e: any ){
								}
								return [ text ];
				}
				let text: string[] = splitTextWithInputBox( props.children );
				return (
								<>
												{
																text.map( ( part, index ) => {
																				return (
																								<>
																												{ part }	{ (index !== (text.length - 1) ?
																												(<div className={ classNames( "each-text-box" ) }>
																																<div className="form">
																																				<input
																																								id={ uuid() }
																																								className={ classNames( "textBox", "form__input" ) }
																																								value={ props.props.answers[index] }
																																								type="text"
																																								onBlur={
																																												props.props.onBlur
																																								}
																																								placeholder="Your answer"
																																								onChange={
																																												( event ) => {
																																																props.props.answers = [ ...props.props.answers.slice( 0, index ), event.target.value, ...props.props.answers.slice( index + 1 ) ];
																																																props.props.onChange();
																																												}
																																								}
																																								style={ { width: props.props.answers[index].length > 10 ? (props.props.answers[index].length * 8) + "px" : "" } }
																																				/>
																																</div>
																												</div>) : <></>)
																								}
																								</>
																				);
																} )
												}
								</>
				);
}
export default AddTextBoxes;
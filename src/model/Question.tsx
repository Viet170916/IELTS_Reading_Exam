import Answer from "./Answer";

class Question{
				private _ID: string = "";
				private _note: string = "";
				private _ques: string = "";
				private _ans: Answer[] = [];
				private _finalAnswer: string[] = [];
				private _score: number = 0;
				private _type: number = 0;
				constructor( ID: string, note: string, ques: string, ans: Answer[], finalAnswer: string[], score: number, type: number ){
								this._ID = ID;
								this._note = note;
								this._ques = ques;
								this._ans = ans;
								this._finalAnswer = finalAnswer;
								this._score = score;
								this._type = type;
				}
				get ID(): string{
								return this._ID;
				}
				get answer(): Answer[]{
								return this._ans;
				}
				set answer( value: Answer[] ){
								this._ans = value;
				}
				set ID( value: string ){
								this._ID = value;
				}
				get note(): string{
								return this._note;
				}
				get finalAnswer(): string[]{
								return this._finalAnswer;
				}
				set finalAnswer( value: string[] ){
								this._finalAnswer = value;
				}
				set note( value: string ){
								this._note = value;
				}
				get type(): number{
								return this._type;
				}
				set type( value: number ){
								this._type = value;
				}
				get ques(): string{
								return this._ques;
				}
				set ques( value: string ){
								this._ques = value;
				}
				get score(): number{
								return this._score;
				}
				set score( value: number ){
								this._score = value;
				}
}
export default Question;
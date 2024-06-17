
class Answer{
    private _ans: string = "";
    private _ID: string = "";


    constructor(ID: string, ans: string) {
        this._ans = ans;
        this._ID = ID;
    }

    get ans(): string {
        return this._ans;
    }

    set ans(value: string) {
        this._ans = value;
    }

    get ID(): string {
        return this._ID;
    }

    set ID(value: string) {
        this._ID = value;
    }
}
export default Answer;
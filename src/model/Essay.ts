class Essay{
    private _ID: string ="";
    private _essay: string ="";

    constructor(ID: string, essay: string) {
        this._ID = ID;
        this._essay = essay;
    }

    get ID(): string {
        return this._ID;
    }

    set ID(value: string) {
        this._ID = value;
    }

    get essay(): string {
        return this._essay;
    }

    set essay(value: string) {
        this._essay = value;
    }
}
export default Essay;
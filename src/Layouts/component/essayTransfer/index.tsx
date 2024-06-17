function EssayTransfer(props: any) {
    let essay: string = props.children;
    let essayArr: string[] = [];
        try {
            essayArr = essay.split("\n");
        }catch (e: any){}
    return (
        <>
            {
                essayArr.map((paragraph,index) => {
                    return (
                        <p key={index} style={{"margin":"20px 0 20px 0"}}>
                            {paragraph}
                        </p>
                    )
                })
            }
        </>
    )
}
export default EssayTransfer;
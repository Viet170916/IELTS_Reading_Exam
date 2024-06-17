let styleCard: Object = {
				height: "30px",
				wight: "400px",
				display: "flex",
				position: "relative",
				alignItems: "center",
};
function Card( props: any ){
				return <div className={ "card2" } style={ styleCard }>
								{ props.children }
				</div>;
}
export default Card;
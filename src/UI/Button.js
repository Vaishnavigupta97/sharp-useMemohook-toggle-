const Button = (props) => {
    console.log('Button running');
    return(
        <>
        <button 
        type={props.type || 'button'}
        onClick={props.onClick}
        disabled={props.disabled}>{props.children}</button>
        </>
    )
}

export default Button;
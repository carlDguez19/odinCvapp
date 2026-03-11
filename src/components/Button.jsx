export function Button({type, text, onClick, fontSize = '16px', className}) {
    //inline style object for cutomizable forn sizing
    //allows each button to visually match the importance of its action
    const buttonStyle = {
        fontSize: fontSize,
    };

    //Reusable button component
    //accepts type, click handler, custom text, optional className, and dynamic font size
    return <button className={className} type={type} style={buttonStyle} onClick={onClick}>{text}</button>;
}
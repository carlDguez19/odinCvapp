export function Button({type, text, onClick, fontSize = '16px'}){
    const buttonStyle = {
        fontSize: fontSize,
    };
    return <button type={type} style={buttonStyle} onClick={onClick}>{text}</button>;
}
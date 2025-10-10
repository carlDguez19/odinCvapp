export function Button({type, text, onClick, fontSize = '16px'}){
    const buttonStyle = {
        type: type,
        fontSize: fontSize,
    };
    return <button style={buttonStyle} onClick={onClick}>{text}</button>;
}
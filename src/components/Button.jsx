export function Button({type, text, onClick, fontSize = '16px', className}) {
    const buttonStyle = {
        fontSize: fontSize,
    };
    return <button className={className} type={type} style={buttonStyle} onClick={onClick}>{text}</button>;
}
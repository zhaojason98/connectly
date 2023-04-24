type HorizontalSpacer = {
    size: number;
}
export default function HorizontalSpacer({
    size
}: HorizontalSpacer){
    return <div style={{width: size * 8}} />
}

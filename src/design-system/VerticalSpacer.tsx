type VerticalSpacer = {
    size: number;
}
export default function VerticalSpacer({
    size
}: VerticalSpacer){
    return <div style={{height: size * 8}} />
}

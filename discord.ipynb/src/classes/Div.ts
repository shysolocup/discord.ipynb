export interface Div {
    div? : boolean,
    align?: alignment,
    text_align?: alignment
}

export function init(data : Div) {
    if (!data.div) return "";

    let base = "<div"

    if (data.align) base += ` align=${data.align}`;
    if (data.text_align) base += ` text-align="${data.text_align}"`;

    return base + ">"
}

export enum alignment {
    center = "center",
    left = "left",
    right = "right"
}
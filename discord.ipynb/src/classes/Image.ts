import * as div from './Div.js';

export interface Image extends div.Div {
    src : string,
    size? : number,
    alt? : string
}

export function init (data : Image ) {
    let base = div.init(data);
    
    base += `<img src="${data.src}"`;

    if (data.size) base += ` height=${data.size}`;
    if (data.alt) base += ` alt="${data.alt}"`;

    return base + ">" + ( (data.div) ? "</div>" : "" )
}
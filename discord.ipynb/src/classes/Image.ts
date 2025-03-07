import * as div from './Div.js';

export interface Image extends div.Div {
    src : string,
    size? : number,
    alt? : string
    width? : number,
    height? : number
}

export function init (data : Image ) {
    let base = div.init(data);

    data.height = (!data.height && data.size) ? data.size : data.height; 
    
    base += `<img src="${data.src}"`;

    if (data.size) base += ` height=${data.height}`;
    if (data.width) base += ` width=${data.width}`;
    if (data.alt) base += ` alt="${data.alt}"`;

    return base + ">" + ( (data.div) ? "</div>" : "" )
}
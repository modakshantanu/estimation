import React, { CSSProperties } from "react";
// @ts-ignore
import { Textfit } from 'react-textfit';


class TextView extends React.Component<{text: string}, {}> {

    render() {

        let fontStyle: CSSProperties = {
            fontSize: 45,
            textAlign: "center" as const,
            minHeight: 100
        }
        return (
        <Textfit max={fontStyle.fontSize} mode = {'single'} style = {{...fontStyle, fontFamily: 'Roboto Mono'}}>
            {this.props.text}
        </Textfit>)
    }

}

export default TextView
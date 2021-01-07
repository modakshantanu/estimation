import React, { CSSProperties } from "react"
import { Theme } from "../App"


type propType = {
    theme: Theme
}


class HeaderView extends React.Component<propType,{}> {
    render() {
        
        let headerStyle: CSSProperties = {
            background: this.props.theme.primary,
            width: "100%",
            textAlign: "center",
            fontFamily: this.props.theme.headerFont,
            fontSize: "30px",
            color: this.props.theme.textColor
        }
        return (
            <div style = {headerStyle}>
                The Estimation Game
            </div>
        )
    }
}

export default HeaderView
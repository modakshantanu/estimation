import React, { CSSProperties } from "react"
import colors from './constants'

let headerStyle: CSSProperties = {
    background: colors.blue,
    width: "100%",
    textAlign: "center",
    fontFamily: "Concert One",
    fontSize: "30px",
    color: colors.white
}


class HeaderView extends React.Component<{},{}> {
    render() {
        return (
            <div style = {headerStyle}>
                The Estimation Game
            </div>
        )
    }
}

export default HeaderView
import React, { CSSProperties } from "react"
import { Theme } from "../App"


type propType = {
    theme: Theme,
    sidebarHandler: (arg0: string) => void,
    width: number
}


class HeaderView extends React.Component<propType,{}> {
    render() {
        
        let headerStyle: CSSProperties = {
            background: this.props.theme.primary,
            width: "wrap-content",
            textAlign: 'center',
            fontFamily: this.props.theme.headerFont,
            fontSize: "30px",
            color: this.props.theme.textColor,
        }

        let iconStyle: CSSProperties = {
            height: '100%',
            margin: '6px',
        }

        if (this.props.width < 400) headerStyle.fontSize = "24px"
        return (
            
            <div style = {headerStyle} id = 'header'>
             
                <span style={{ ...headerStyle, display:'inline-block'}}>
                    The Estimation Game
                </span>
                <i 
                    className="fas fa-question" 
                    style={{ ...iconStyle ,float: 'left'}}
                    onClick = {() => this.props.sidebarHandler('left')}
                />
                <i 
                    className="fas fa-dice" 
                    style={{...iconStyle ,float: 'right'}}
                    onClick = {() => this.props.sidebarHandler('right')}
                
                />
            </div>

        )
    }
}

export default HeaderView
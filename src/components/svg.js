import React from "react"
import Moments from "../../content/assets/svg/Moments.svg"
import Witch from "../../content/assets/svg/Witch.svg"
import WholeYear from "../../content/assets/svg/WholeYear.svg"
import Polaroid from "../../content/assets/svg/Polaroid.svg"
import OnTheWay from "../../content/assets/svg/OnTheWay.svg"

export class Svg extends React.Component {
  render() {
    return renderLogo(this.props.logo)
  }
}

function renderLogo(logo) {
  let style = { height: "inherit", width: "inherit" }
  switch (logo) {
    case "moments":
      return <Moments style={style} />
    case "on-the-way":
      return <OnTheWay style={style} />
    case "polaroid":
      return <Polaroid style={style} />
    case "whole-year":
      return <WholeYear style={style} />
    case "witch":
      return <Witch style={style} />
  }
}
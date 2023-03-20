import '../style.css';
import GameBox from '../gamebox/gamebox';

/**
   * Generates generic white box, containing a Title and Content component.
   * @param {number} width Default 300
   * @param {number} height Default 600
   * @param {boolean} hidden Default false
   */
function WhiteBox({ Title, titleProps, Content, contentProps, width, height, hidden }) {
  let boxwidth, boxheight;
  if (width === undefined) boxwidth = 300;
  else boxwidth = width;

  if (height === undefined) boxheight = 600;
  else boxheight = height;
  const styleObj = {
    width: boxwidth,
    height: boxheight,
    visibility: ((hidden === undefined || hidden === false) ? "visible" : "hidden")
  };
  return (
    <div className="square" style={styleObj}>
      {/* <h1 className="title">{title}</h1> */}
      { (Title !== undefined) && <Title {...titleProps} />}
      { (Content !== undefined) && <Content {...contentProps} />}
    </div>
  );
}

export default WhiteBox;

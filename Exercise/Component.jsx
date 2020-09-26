import React from "react";

// using "css" will throw an error in the typescript file - just ignore it
const getStyle = (props) => css`
  height: 100%;
  width: 100%;
  min-width: 400px;
  background-color: ${props.backgroundColor};
  display: flex;
  flex-direction: column;

  .title {
    font-size: 20px;
  }
  .classTitle {
    font-size: 19px;
    font-weight: bold;
  }
  .classInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Component = (props) => {
  return (
    <div css={getStyle(props)}>
      <div className="title">Class</div>
      <div className="classTitle">{props.title}</div>
      <div>{props.description}</div>
      <div className="classInfo">
        <div className="leaderProfile">
          Leader:
          {props.classLeader}
        </div>
        <div>
          Date:
          {props.date}
        </div>
        <div>
          Start:
          {props.start}
        </div>
        <div>
          End:
          {props.end}
        </div>
      </div>
      <div>
        {props.actions && props.actions.length
          ? props.actions.map((action) => {
              return (
                <button
                  style={{ backgroundColor: action.color }}
                  onClick={action.onClick}
                >
                  Active now:
                  {action.label}
                </button>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Component;

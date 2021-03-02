import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const DropDown = () => {
  return (
    <DropDownContainer>
      <ul>
        <li>
          <Link to="/Chiara">chiara</Link>
        </li>
        <li>
          <Link to="/Daniel">daniel</Link>
        </li>
        <li>
          <Link to="/Julius">julius</Link>
        </li>
        <li>
          <Link to="/Leonie">leonie</Link>
        </li>
        <li>
          <Link to="/Vincent">vincent</Link>
        </li>
      </ul>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: absolute;
  top: -5px;
  left: 20px;
  padding: 35px 20px 20px 20px;
  height: auto;
  background: green;
  ul {
    list-style-type: none;
    align-items: center;
    padding: 0;
    li {
      padding: 5px 0;
      font-size: 1.25rem;
    }
  }
`;

export default withRouter(DropDown);

import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DropDown = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <DropDownContainer theme={theme}>
      <ul>
        <li>
          <Link to="/chiara">Chiara Kordubel</Link>
        </li>
        <li>
          <Link to="/daniel">Daniel Heese</Link>
        </li>
        <li>
          <Link to="/julius">Julius Krum</Link>
        </li>
        <li>
          <Link to="/leonie">Leonie Fulda?!</Link>
        </li>
        <li>
          <Link to="/vincent">Vincent Völker</Link>
        </li>
      </ul>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: absolute;
  top: -5px;
  left: 30px;
  padding: 35px 20px 20px 20px;
  height: auto;
  background: rgba(0, 0, 0, 0.75);
  ul {
    list-style-type: none;
    align-items: center;
    padding: 0;
    li {
      margin: 0;
      padding: 5px 0;
      font-size: 1.25rem;
      a {
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default withRouter(DropDown);

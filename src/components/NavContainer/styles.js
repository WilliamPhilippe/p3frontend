import styled from 'styled-components';

export const NavContent = styled.nav`
  background-color: #eee;
  width: 100%;
  height: 40px;

  position: absolute;
  top: 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .left {
    margin-left: 40px;
  }

  .right {
    margin-right: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      margin-left: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 20px;
      width: 50px;


      border: 0px;
      border-radius: 4px;

      background-color: transparent;

      font-size: 12px;
      font-weight: bold;
      color: #9B0E0E;

      :hover {
        transition: 0.5s;
      }
    }

    h4 {

    }
  }
`;

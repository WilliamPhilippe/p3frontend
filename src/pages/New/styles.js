import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

export const FormContent = styled.div`
  max-width: 550px;
  width: 100%;

  text-align: center;
  margin: auto;

  padding: 20px 20px 20px 20px;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #ffffff;


  h5 {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: normal;
    }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 12px;
      color: #9B0E0E;
      margin-top: -15px;
      margin-bottom: 20px;
    }


    input {
      height: 40px;
      width: 200px;
      margin-bottom: 20px;
      
      border: 0px;
      padding-left: 10px;

      background-color: #f5f5f5;

      ::placeholder {
        color: #6c6c6c;
        font-size: 12px;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 30px;
      width: 70px;

      margin-bottom: 20px;

      border: 0px;
      border-radius: 4px;

      background-color: #077FB3;

      font-size: 16px;
      font-weight: bold;
      color: #ffffff;

      :hover {
        background-color: #066791;
        transition: 0.5s;
      }
    }
  }

  a {
    color: #077FB3;
  }

  transition: all 0.3s;
`;

export const CheckAndLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: block;
    color: red;
  }
`;

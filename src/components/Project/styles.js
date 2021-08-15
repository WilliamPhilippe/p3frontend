import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 350px;
    background-color: #f6f6f6;

    border: 2px solid #e7e7e7;
    border-radius: 4px;
    margin: 10px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.div`
    height: 40px;
    width: 100%;

    background-color: #f1f1f1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 10px;
    margin-bottom: 5px;

    svg {
        margin-left: 5px;
        cursor: pointer;
    }

    .left {
        display: flex;
        flex-direction: row;
        align-items: center;

        input {
            height: 30px;
            width: 200px;

            border: 1px solid #dedede;
            border-radius: 4px;

            padding-left: 5px;

            background-color: #f7f7f7;
        }

        button {
            height: 28px;
            width: 50px;

            border: 0px;
            border-radius: 4px;
            background-color: #3FAB4A;

            font-weight: bold;
            color: #f9f9f9;

            margin-left: 10px;


            :hover {
            background-color: #286A2E;
            transition: 0.5s;
            }
        }
    }
`;

export const TasksContent = styled.div`
    background-color: #f9f9f9;
    width: 100%;
    height: 265px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    overflow-y: auto;

    h3 {
        margin-left: 10px;
    }
    ul {
        padding: 10px 0px 5px 13px;
        li {
            margin-bottom: 5px;
        }
    }

`;

export const Footer = styled.div`
    background-color: #f1f1f1;

    height: 45px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    padding: 0px 5px;

    input {
        height: 30px;

        border: 1px solid #dedede;
        border-radius: 4px;

        padding-left: 5px;

        background-color: #f7f7f7;
    }    

    button {
        height: 30px;
        width: 50px;

        border: 0px;
        border-radius: 4px;
        background-color: #3FAB4A;

        font-weight: bold;
        color: #f9f9f9;


        :hover {
        background-color: #286A2E;
        transition: 0.5s;
      }
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 350px;
    background-color: #f1f1f1;

    border: 2px solid #e7e7e7;
    border-radius: 4px;
    margin: 10px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    form {
        display: flex;
        flex-direction: column;

        h2 {
            margin-bottom: 10px;
            font-size: 16px;
            text-align: center;
        }

        input {
            height: 40px;
            width: 200px;

            border: 1px solid #eee;
            border-radius: 4px;
            
            padding-left: 5px;

            margin-bottom: 10px;
        }

        button {
            height: 25px;
            width: 200px;

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
    }
`;
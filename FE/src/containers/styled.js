import styled from 'styled-components';

let S = {};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const TextArea = styled.textarea`
    flex: 1;
    height: 200px;
`;

export default S = {
    Wrapper,
    TextArea
}
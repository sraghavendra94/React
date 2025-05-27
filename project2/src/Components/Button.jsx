import {styled} from 'styled-components';

const CustomButton = styled.button`
  height: 2rem;
  width: 5rem;
  margin-right: 1rem;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 1rem;
  outline: none;

  &:hover{
    background-color: #708090;
    color: white;
    cursor: pointer;
  }
`

export default function Button({onSave, children}){
    return <CustomButton onClick={onSave}>{children}</CustomButton>
}

import styled, {css} from 'styled-components';

export const Button = styled.button`
   border: none;
   padding: 8px;
   font-weight: 900;
   cursor: pointer;
   outline: inherit;

   ${props => props.primary && css`
      background-color: #428bca;
      color: white;

      &:hover {
         background-color: #5496CF;
      }
   `}

   ${props => props.success && css`
      background-color: #5cb85c;
      color: white;

      &:hover {
         background-color: #6cbf6c;
      }
   `}
`

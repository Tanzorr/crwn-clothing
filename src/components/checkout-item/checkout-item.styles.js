import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
      width: 100%;
      display: flex;
      min-height: 100px;
      border-bottom: 1px solid darkgrey;
      padding: 15px 0;
      font-size: 20px;
      align-items: center;
`

export const CheckoutImageContainer = styled.div`
     width: 20%;
      img {
      width: 100%;
      height: 100%;
    }

`




export const TextContainer =styled.span`
    width:23%;
    padding-left:15px;
`
export const QuontatyContnatiner = styled(TextContainer)`
     display: flex;
    .arrow{
      cursor: pointer;
    }

    .value{
      margin: 0 10px;
    }
    padding-left: 20px;
`;
export const RemoveButton = styled.div`
     padding-left: 12px;
     cursor: pointer;
`




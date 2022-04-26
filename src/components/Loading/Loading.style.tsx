import styled from "styled-components";
import tw from "twin.macro";

export const LoadingContainer = styled.div`
    ${tw`fixed
    top-0
    left-0
    h-full
    w-full
    bg-primary
    flex
    items-center
    justify-center
    `}    
    
`
export const ImageContainer = styled.div`

    
    ${tw`
        w-20

        md:(w-40)
    `}
    

    @keyframes loading{
        from{
            transform: rotate(0);
        }

        to{
            transform: rotate(360deg);
        }
    }

    
    img{
        animation-name: loading;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        filter: invert(1);
        width:100%;
        height:auto;
    }
`


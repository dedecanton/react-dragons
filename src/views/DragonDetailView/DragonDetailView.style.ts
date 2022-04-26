import styled from "styled-components";
import tw from "twin.macro";

export const Container = tw.div`
    w-full
    flex
    flex-col
    self-center
    justify-self-center
    items-center
    animate-fade-in-down

    md:(flex-row justify-between)
`;
export const DragonContent = tw.div`
    flex
    flex-col
    items-center
    justify-center
    
    w-full
    my-4

    md:(w-full max-w-[48%])
`;

export const DragonImageContainer = tw.div`
  
  w-60
  xsm:(
    w-full
  )
    shadow-2xl
    p-4
    rounded-3xl

    md:(w-full max-w-[48%])
`;

export const DragonName = tw.h2`
my-4
text-2xl
text-gray-900
font-bold
underline

`;

export const DragonDetails = styled.div`
  ${tw`

        border-2
        rounded-xl
        border-gray-900
        shadow-xl
        w-full
        flex
        flex-col
        gap-4
        items-center
        justify-center
        text-center

        p-4
        

    `}

  p,span {
    ${tw`text-lg text-gray-900`}
  }

  span {
    ${tw` font-bold underline italic mr-1`}
  }
`;


import tw from "twin.macro";

import styled from "styled-components";

type Props = {
  isExpanded: boolean;
};

export const Container = tw.div`
    w-full
    h-screen
    flex
    flex-col
    bg-white
    relative
    justify-between
    animate-fade-in-down

    md:(
        flex-row
        items-center
    )
`;

export const TopContainer = tw.div`
    w-full
    h-[300px]
    flex
    flex-col
    justify-center
    items-center
    pl-[2%]

    md:(
        h-screen
        w-full
    )
`;

export const BackDrop = styled.div<Props>(({isExpanded}) => [
  tw`
    w-full
    h-[300px]
    
    absolute
    top-0
    left-0
    
    flex
    flex-col

    rounded-br-full
    bg-primary
    
    transition-all 
    ease-in

    md:(
        w-[50%]
        h-screen
    )
    
    `,

    isExpanded && tw`
        items-center
        justify-center
        h-full
        rounded-none
        bg-gray-900
        z-20
        
        md:(
            w-full
        )
    `,

],
);

export const HeaderContainer = tw.div`
    w-full
    flex
    flex-col
    z-10

    md:(
        justify-center
        items-center
    )
`;

export const HeaderText = tw.h2`
    text-5xl
    text-white
    font-semibold
    md:(my-8)
`;

export const SmallText = tw.p`
    text-white
    text-lg
    mt-2

`;

export const HeaderImage = tw.img`
        w-full
        h-auto
        max-w-lg
        max-h-80
        hidden
        my-4

        md:(block)
`

export const InnerContanier = tw.div` 
    w-full
    h-[calc(100% - 350px)]

    flex
    flex-col
    justify-center
    items-center

    px-7
    py-16 
`;

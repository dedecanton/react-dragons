import tw from "twin.macro";
import { Link } from "react-router-dom";
import styled from "styled-components";

type CardProps = {
    isDeleting:boolean
}


export const Card = styled.li`
  ${tw`    
  
    w-60
    m-2
    sm:(
        w-80
        m-4
        )


    shadow-xl
    rounded
    bg-gray-100


    flex
    flex-col
    justify-center
    items-center
    transition-all
    ease-in-out
    animate-fade-in-down
    transition-duration[250ms]
    `
    }

    ${({isDeleting}:CardProps) => isDeleting && tw`scale-0 rotate-180 `}
    `;

export const CardTitle = tw.h2`
    w-full
    shadow-2xl
    rounded-t
    py-2

    text-gray-900
    font-bold
    text-center
    text-xl
`;

export const CardImage = tw.div`
    w-full
    h-auto
    p-4
`;

export const InfoLink = tw(Link)`
    w-full
    p-2
    text-white
    bg-gray-900
    text-lg
    text-center

    transition-all
    ease-in-out

    hover:scale-105
`;

export const ActionsContainer = tw.div`
    w-full
    justify-between
    flex
`;
export const ActionButton = styled.button`
  ${tw`
        w-1/2
        p-2
        border
        first:rounded-bl
        last:rounded-br

        bg-white
        text-gray-900

        transition-all
        ease-in-out
        transition-duration[300ms]


        hover:(bg-gray-900 text-white scale-105)
    `}
`;

import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`
        flex
        bg-white
        text-primary
        border-2
        border-primary
        px-4
        py-3
        rounded
        items-center
        justify-center
        font-bold

        transition-all
        ease-in-out

        hover:(bg-primary text-white scale-105)
    `}

  svg {
    ${tw`
            text-xl
            mr-1
        `}
  }
`;

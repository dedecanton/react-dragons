import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

//
type HeaderProps = {
  headerstyle: string;
};

export const HeaderStyled = styled.header`
  ${tw`
     fixed
     top-0
     left-0
     w-full

     bg-white
     border-b-2
     border-primary
     px-2
     py-3
     transition-all
     ease-in-out
     transition-duration[300ms]    
     `}

  ${({ headerstyle }: HeaderProps) => [
    headerstyle === 'condensed' && tw`bg-primary py-2`,
    headerstyle === 'condensed' &&
      `img{
            filter: invert(1);
        }

        a{
          background: white;
          color: rgb(17, 24, 39);
        }
        `,
  ]}
`;

export const HeaderContainer = tw.div`
    max-w-7xl
    mx-auto
    flex
    w-full
    justify-between
    xsm:(justify-center)
    items-center
    relative
`;

export const Logo = tw.div`
    w-12
    md:(w-16)
    xsm:(
      absolute 
      left-0
    )
`;

export const Image = tw.img`
    w-full
    h-auto
    filter
    transition-all
    ease-in-out
    transition-duration[300ms]
`;

export const HeaderButton = styled(Link)`
  ${tw`
    mx-4
    p-2
    border-2
    text-center
    font-bold
    text-sm
    rounded
    transition-all
    ease-in-out
    
    xsm:(
      px-4
      py-2
    )

    `}

  ${({ headerstyle }: HeaderProps) =>
    headerstyle === 'condensed'
      ? tw`
        !border-white
        !bg-primary 
        !text-white
        hover:(!bg-white !text-primary)
        `
      : tw`
        !border-primary
        !bg-white
        !text-primary
        hover:(!bg-primary !text-white)
      `}
`;

export const LogoutButton = styled.button(({ headerstyle }: HeaderProps) => [
  tw`
  py-2
  px-4
  transition-all
  rounded 
  xsm:(
    absolute 
    right-0
  )
  hover:(scale-105)`,
  headerstyle === 'condensed' ? tw`text-primary bg-white` : tw`text-white bg-primary`,
]);

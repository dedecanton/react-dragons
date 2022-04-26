import { Link } from "react-router-dom";
import tw from "twin.macro";

export const SuccessMessage = tw.p`
    text-sm
    text-white
    text-center
    font-bold
    bg-green-400
    px-8
    py-4
    rounded
    my-2
`;

export const FailMessage = tw.p`
    text-sm
    text-white
    font-bold
    bg-red-500
    px-8
    py-4
    rounded
`;

export const ValidationMessage = tw.p`
    text-sm
    text-left
    text-primary
`

export const SubmitButton = tw.input`
    w-full
    py-3
    text-white
    text-lg
    font-semibold
    border-none
    rounded-3xl
    cursor-pointer
    transition-all
    ease-in-out
    bg-primary
    my-2

    hover:(
        brightness-105
        scale-105
    )

    md:(
        max-w-xl
    )
`;

export const MutedLink = tw.a`
    text-sm
    text-gray-500
    font-semibold
`;

export const Input = tw.input`
    w-full
    h-12

    outline-none
    border-2
    border-primary
    rounded
    my-2
    px-4

    transition-all
    ease-in-out

    text-sm

    placeholder:text-primary

    focus:(
        bg-primary
        placeholder:text-white
        scale-105
        text-white
    )
    hover:(
        text-white
        bg-primary
        placeholder:text-white
        scale-110
    )


`;

export const FormContainer = tw.form`
    w-full
    flex
    flex-col

    md:(
        max-w-xl
    )
`;


export const BoxContainer = tw.div`
    w-full
    flex
    flex-col
    items-center
    mt-4
`;

export const BoldLink = tw.span`
    text-sm
    text-primary
    font-semibold
    ml-2
`;

export const AlternativeText = tw.p`
    text-lg
    text-primary
    font-bold
    relative
    px-2
    text-center

    before:(
        content
        absolute
        w-10
        border-t-2
        border-primary
        top-1/2
        -left-10
    )
    after:(
        content
        absolute
        w-10
        border-t-2
        border-primary
        top-1/2
        -right-10
    )
`;

export const FormGroup = tw.div``

export const FormLabel = tw.label``

export const BackLink = tw(Link)`
    my-4
    w-full
    p-2
    rounded-lg

    bg-gray-900

    text-white
    text-lg
    text-center

    transition-all
    ease-in-out

    hover:scale-105

    md:(max-w-xl)
`;

export const SearchBar = tw.input`
        w-full
        max-w-3xl
        p-2
        border-2
        border-primary
        rounded
        my-2
        transition-all
        ease-in
        outline-none

        
        placeholder:(text-center text-primary )
        hover:(bg-primary text-white placeholder:text-white scale-105)
        focus:(bg-primary text-white placeholder:text-white)
`
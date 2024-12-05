type props = {
    children: React.ReactNode,
    section: string
}

const Link = ({children, section}:props) => {
    return (
        <a className="relative text-light font-semibold hover:text-quaternary hover:after:w-[100%] transition p-[24px] block after:content[''] after:transition-all after:ease-in-out after:duration-[300ms] after:block after:absolute after:bottom-[0px] after:left-[50%] after:translate-x-[-50%] after:w-[0%] after:h-[3px] after:bg-quaternary" href={section} target="_self">{children}</a>
    )
}

export default Link;
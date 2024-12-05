type props = {
    children: React.ReactNode,
    reverse?: boolean,
    className?: string
}

const Column = ({children,reverse,className}:props) => {
    return (
        <div className={`flex-1 px-[15px] py-[10px] ${reverse?'flex-col-reverse':'flex-col'} ${typeof className === 'undefined' ? '' : className}`}>
            {children}
        </div>
    )
}

export default Column;
type props = {
    children: React.ReactNode,
    reverse?: boolean,
    className?: string
}

const Row = ({children,reverse,className}:props) => {
    return (
        <div className={`flex gap-[20px] ${reverse?'flex-row-reverse':'flex-row'} ${typeof className === 'undefined' ? '' : className}`}>
            {children}
        </div>
    )
}

export default Row;
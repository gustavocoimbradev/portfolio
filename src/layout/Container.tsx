type props = {
    children: React.ReactNode,
    className?: string,
    fluid?: boolean
}

const Container = ({children, className, fluid}:props) => {
    return (
        <div className={`container mx-auto px-[15px] ${fluid?'max-w-[100%]':'max-w-[1100px]'}`}>
            {children}
        </div>
    )
}

export default Container;
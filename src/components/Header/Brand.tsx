type props = {
    children: React.ReactNode
}

const Brand = ({children}:props) => {
    return (
        <a className="text-light font-bold text-[1.3rem]" href="./" target="_self">Gustavo Coimbra</a>
    )
}

export default Brand;
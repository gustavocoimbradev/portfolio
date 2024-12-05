import Container from '@/layout/Container';
import Row from '@/layout/Row';
import Column from '@/layout/Column';

import Brand from './Brand';
import Link from './Link';

const Header = () => {
    return (
        <header className="bg-primary">
            <Container>
                <Row className="content-center">
                    <Column className="content-center py-[0px]">
                        <Brand>Gustavo Coimbra</Brand>
                    </Column>
                    <Column className="content-center py-[0px]">
                        <nav>
                            <ul className="flex justify-end">
                                <li>
                                    <Link section="#top">Home</Link>
                                </li>
                                <li>
                                    <Link section="#portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link section="#projects">Projetos</Link>
                                </li>
                                <li>
                                    <Link section="#Contact">Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </Column>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
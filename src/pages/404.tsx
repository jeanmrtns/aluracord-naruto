import Link from 'next/link';
import * as S from '../styles/404';

export default function ErrorPage(): JSX.Element {
    return (
        <S.Container>
            <S.Content>
                <h1>404</h1>
                <h1>Hey, <span>Shinobi</span></h1>
                <p>Voce esta tentando ir para uma vila que nao existe!</p>

                <Link href="/">
                    <a>Voltar para a pagina inicial</a>
                </Link>
            </S.Content>
        </S.Container>
    );
}

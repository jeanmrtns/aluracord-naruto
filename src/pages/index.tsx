import Image from 'next/image';
import * as S from '../styles/HomeStyle';

export default function Home(): JSX.Element {

  const user = {
    nickname: 'jeanmrtns',
    url: 'https://github.com/jeanmrtns.png',
    name: 'Jean Martins',
  };

  return (
    <S.Container>
      <S.Content>
        <S.Form>
          <h2>Boas vindas a Vila da Folha</h2>
          <h3>Aluracord - Alura Naruto</h3>
          <input type="text" value={user.nickname} />
          <button>Entrar</button>
        </S.Form>
        <S.GitHubAvatar>
          <Image src={user.url} alt={user.name} width={200} height={200} />
          <span>{user.nickname}</span>
        </S.GitHubAvatar>
      </S.Content>
    </S.Container>
  );
}

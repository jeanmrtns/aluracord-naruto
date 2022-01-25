import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from '../styles/HomeStyle';

interface User {
  nickname: string;
}

export default function Home(): JSX.Element {

  const [user, setUser] = useState<User>({
    nickname: 'jeanmrtns',
  });

  const router = useRouter();

  function handleChangeUser(e: ChangeEvent<HTMLInputElement>) {
    setUser({nickname: e.target.value});
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/chat');
  }

  return (
    <S.Container>
      <S.Content>
        <S.Form onSubmit={handleSubmit}>
          <h2>Boas vindas a Vila da Folha</h2>
          <h3>Aluracord - Alura Naruto</h3>
          <input type="text" value={user.nickname} onChange={handleChangeUser} placeholder='Seu usuário no Github' />
          <button disabled={user.nickname.length < 2}>Entrar</button>
        </S.Form>
          { user.nickname.length >= 2 && (
            <S.GitHubAvatar>
                <>
                  <Image src={`https://github.com/${user.nickname}.png`} alt={user.nickname} width={200} height={200} />
                  <span>{user.nickname}</span>
                </>
            </S.GitHubAvatar>
          )}
      </S.Content>
    </S.Container>
  );
}

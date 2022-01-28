import { ChangeEvent, FormEvent, useState } from 'react';
import Modal from "react-modal";

import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from '../styles/HomeStyle';
import Head from 'next/head';
import { UserModal } from '../components/UserModal';

interface User {
  nickname: string;
}

Modal.setAppElement("#__next");

export default function Home(): JSX.Element {

  const [user, setUser] = useState<User>({nickname: 'jeanmrtns'});

  const [userModalOpen, setUserModalOpen] = useState(false);

  const router = useRouter();

  function handleChangeUser(e: ChangeEvent<HTMLInputElement>) {
    setUser({nickname: e.target.value});
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/chat?username=${user.nickname}`);
  }

  async function showUserInfo(login: string) {
    setUserModalOpen(true);
  }

  return (
    <>
      <S.Container>
        <Head>
          <title>Aluracord - Naruto</title>
        </Head>
        <S.Content>
          <S.Form onSubmit={handleSubmit}>
            <h2>Boas vindas a Vila da Folha</h2>
            <h3>Aluracord - Alura Naruto</h3>
            <input type="text" value={user.nickname} onChange={handleChangeUser} placeholder='Seu usuário no Github' />
            <button disabled={user.nickname.length < 2}>Entrar</button>
          </S.Form>
          { user.nickname.length >= 2 && (
            <S.GitHubAvatar onClick={() => showUserInfo(user.nickname)}>
              <>
                <Image src={`https://github.com/${user.nickname}.png`} alt={user.nickname} width={200} height={200} />
                <span>{user.nickname}</span>
              </>
            </S.GitHubAvatar>
          )}
        </S.Content>
      </S.Container>
      <UserModal
        isOpen={userModalOpen}
        onRequestClose={() => setUserModalOpen(false)}
        login={user.nickname}
      />
    </>
  );
}

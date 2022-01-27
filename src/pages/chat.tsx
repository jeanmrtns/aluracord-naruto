import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import * as S from "../styles/ChatStyle";

interface Message {
    id: number;
    user: string;
    userName: string;
    message: string;
    createdAt: string;
}

const messages = [
    {
        id: 1,
        user: 'jeanmrtns',
        userName: 'Jean Martins',
        message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste accusantium, animi impedit voluptates cumque voluptatum ut! Vitae necessitatibus quibusdam quisquam fuga aspernatur eum magni, aliquam laborum. Iste veniam qui sequi.',
        createdAt: '17/01/2021'
    },
    {
        id: 2,
        user: 'peas',
        userName: 'Paulo Silveira',
        message: 'Isso aqui foi muito legal',
        createdAt: '17/01/2021'
    },
    {
        id: 3,
        user: 'jeanmrtns',
        userName: 'Jean Martins',
        message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste accusantium, animi impedit voluptates cumque voluptatum ut! Vitae necessitatibus quibusdam quisquam fuga aspernatur eum magni, aliquam laborum. Iste veniam qui sequi.',
        createdAt: '18/01/2021'
    },
]

export default function Chat(): JSX.Element {

    const [newMessage, setNewMessage] = useState('');
    const [messagesList, setMessagesList] = useState<Message[]>(messages);

    function handleChangeNewMessage(e: ChangeEvent<HTMLInputElement>) {
        const message = e.target.value;
        setNewMessage(message);
    }

    function handleSendNewMessage() {
        setMessagesList([...messagesList, {
            id: messagesList.length + 1,
            createdAt: '27/01/2022',
            message: newMessage,
            user: 'jeanmrtns',
            userName: 'Jean'
        }]);

        setNewMessage('');
    }

    function removeMessage(id: number) {
        const newMessagesList = messagesList.filter(message => message.id !== id);
        setMessagesList(newMessagesList);
    }

    return (
        <S.Container>
            <Head>
                <title>Aluracord - Naruto Chat</title>
            </Head>
            <S.Content onSubmit={e => e.preventDefault()}>
                <S.Header>
                    <h1>Chat</h1>
                    <Link href="/"><a>Logout</a></Link>
                </S.Header>

                <S.Chat>
                    { messagesList.map(message => {
                        return (
                            <S.Message key={message.id}>
                                <div>
                                    <Image src={`https://github.com/${message.user}.png`} alt={message.user} width={30} height={30} />
                                    <h4>{message.userName}</h4>
                                    <time>{message.createdAt}</time>
                                </div>
                                <p>{message.message} <button onClick={() => removeMessage(message.id)} type="button">Excluir</button></p>
                                
                            </S.Message>
                        )
                    }) }
                </S.Chat>

                <S.Footer>
                    <S.NewMessageInput 
                        type="text" 
                        value={newMessage} 
                        onChange={handleChangeNewMessage} 
                        placeholder="Digite sua mensagem"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSendNewMessage();
                            }
                        }}
                    />
                    <button onClick={handleSendNewMessage}>Enviar</button>
                </S.Footer>
            </S.Content>
        </S.Container>
    );
}

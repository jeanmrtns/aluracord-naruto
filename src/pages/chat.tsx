import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import * as S from "../styles/ChatStyle";
import { supabase } from "../utils/supabaseClient";
import { format } from 'date-fns';

interface Message {
    id: number;
    user: string;
    user_name: string;
    message_text: string;
    created_at: Date;
}

export default function Chat(): JSX.Element {

    const [newMessage, setNewMessage] = useState('');
    const [messagesList, setMessagesList] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    async function loadMessages() {
        setLoading(true);
        const response = await supabase.from('messages')
        .select('id, created_at, user, user_name, message_text');

        const messages = response.data.map(message => {
            return {
                ...message,
                created_at: format(new Date(message.created_at), 'dd/MM/yyyy')
            }
        });
        setMessagesList(messages);
        setLoading(false);
    }

    function handleChangeNewMessage(e: ChangeEvent<HTMLInputElement>) {
        const message = e.target.value;
        setNewMessage(message);
    }

    async function handleSendNewMessage() {
        await supabase.from('messages').insert([{
            user: 'Jean',
            user_name: 'jeanmrtns',
            message_text: newMessage
        }]);

        loadMessages();
        setNewMessage('');
    }

    async function removeMessage(id: number) {
        const newMessagesList = messagesList.filter(message => message.id !== id);
        setMessagesList(newMessagesList);
        await supabase.from('messages')
        .delete()
        .match({id});

        loadMessages();
    }

    useEffect(() => {       
        loadMessages();
    }, []);
    
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
                    { loading && <S.LoadSpinner /> }
                    { messagesList.length ? messagesList.map(message => {
                        return (
                            <S.Message key={message.id}>
                                <div>
                                    <Image src={`https://github.com/${message.user_name}.png`} alt={message.user} width={30} height={30} />
                                    <h4>{message.user_name}</h4>
                                    <time>{message.created_at}</time>
                                </div>
                                <p>{message.message_text} <button onClick={() => removeMessage(message.id)} type="button">Excluir</button></p>
                                
                            </S.Message>
                        )
                    }) : (<h1>Ooops. Nenhuma mensagem ainda</h1>)}
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

import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Content } from "./styles";

interface UserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    login: string;
}

interface UserData {
    avatar_url: string;
    login: string;
    html_url: string;
    bio: string;
    name: string;
  }
  
export function UserModal({
  isOpen,
  onRequestClose,
  login
}: UserModalProps) {

    const [user, setUser] = useState<UserData>({} as UserData);

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(r => r.json())
        .then(data => setUser({
            avatar_url: data.url,
            bio: data.bio,
            html_url: data.html_url,
            login: data.login,
            name: data.name
        }))
    }, [login]);

    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <h1>{login}</h1>
        {
            user && (
                <Content>
                    <p>BIO: {user.bio}</p>
                    <Link href={user.html_url}><a target="_blank">Acesse o perfil de <span>{user.name?.split(' ')[0]}</span> no Github</a></Link>
                </Content>
            )
        }
    </Modal>
    );
}

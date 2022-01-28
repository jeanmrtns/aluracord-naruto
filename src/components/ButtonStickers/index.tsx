import { Button, Modal, Container } from "./styles";
import aluraConfig from '../../../config.json';
import { useState } from "react";

interface ButtonStickersProps {
    sendSticker: () => void;
    setMessage: (message: string) => void;
}

export function ButtonStickers({ setMessage, sendSticker }: ButtonStickersProps) {

    const [open, setOpen] = useState(false);

    function handleModal() {
        setOpen(!open)
    }

    async function handleNewMessage(stk: string) {
        setMessage(stk);
        handleModal();
    }

    return(
        <Container>
            <Button type="button" onClick={handleModal}>👀</Button>
            {
                open && (
                    <Modal>
                        { aluraConfig.stickers.map(stk => {
                            return (
                                <img key={stk} src={stk} alt={stk} onClick={() => handleNewMessage(`:sticker: ${stk}`)} />
                            )
                        }) }
                    </Modal>
                )
            }
        </Container>
    );
}

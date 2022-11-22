import React from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Animal, Btn } from '../../common/model';

type ModalProp = {
    title: string | JSX.Element;
    body: string | JSX.Element;
    open: boolean;
    handleClose: () => void;
    btnList: Btn[];
}

const Modal = ({
  title, body, open, handleClose, btnList,
}: ModalProp) => (
    <Box>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {body}
            </DialogContent>
            <DialogActions>
                {btnList.map((btn: Btn) => (
                    <Button key={btn.label} onClick={btn.handleClick}>
                        {btn.label}
                    </Button>
                ))}
            </DialogActions>
        </Dialog>
    </Box>
);

export default Modal;

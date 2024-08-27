import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AddChoices = ({ open, handleClose, handleSaveOption , }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const options = formJson.option;
        handleSaveOption(options);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Add an option</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Just make sure that you added an option that is the
                            same in correct answer
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="option"
                            name="option"
                            label="Option"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default AddChoices;

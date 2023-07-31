import { createTheme } from "@mui/material"

const theme = createTheme();

export const styles = {
    root: {
        margin: theme.spacing(1),
      },
      paper: {
        padding: theme.spacing(2),
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
}
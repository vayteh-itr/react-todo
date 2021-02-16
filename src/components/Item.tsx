import React from "react";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ADF5CE",
    margin: "1px",
    borderRadius: "5px",
    width: "100%",
    border: "1px solid #3F51B5",
    paddingRight: "20px",
  },
  title: {
    paddingLeft: "20px",
  },
  titleDone: {
    paddingLeft: "20px",
    textDecorationLine: "line-through",
  },
  rootDone: {
    backgroundColor: "#CDECF8",
    border: "1px solid #3F51B5",
    margin: "1px",
    borderRadius: "5px",
    width: "100%",
    paddingRight: "20px",
  },
});

interface IItem {
  title: string | symbol;
  id: number;
  time: string;
  done: boolean;
  onDone(id: number): void;
  onRemove(id: number): void;
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const Item: React.FC<IItem> = ({ title, id, time, done, onDone, onRemove, handleTodoUpdate }) => {
  const styles = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={1}
      className={done ? styles.root : styles.rootDone}
    >
      <Grid item xs={5}>
        <InputBase
          className={done ? styles.titleDone : styles.title}
          inputProps={{ 'aria-label': 'naked' }}
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleTodoUpdate(event, id)}
    />
      </Grid>
      <Grid item xs={5}>
        <Typography
          variant="h5"
        >
          {time}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={done}
              onChange={() => onDone(id)}
              icon={<AssignmentTurnedInOutlinedIcon color="primary" />}
              checkedIcon={<AssignmentTurnedInOutlinedIcon color="action" />}
              name="done"
              size="medium"
            />
          }
          label=""
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton size="medium" onClick={() => onRemove(id)}>
          <DeleteForeverOutlinedIcon color="error" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Item;
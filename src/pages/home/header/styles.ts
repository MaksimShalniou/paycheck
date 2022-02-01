import { makeStyles } from "@material-ui/core/styles";

export const HEIGHT_OF_HEADER_BLOCK = 70;

export const useStyles = makeStyles({
  header: {
    position: "sticky",
    top: 0,
    left: 0,
    boxShadow: "0px 0px 12px #8997AA",
    background: "white",
    height: HEIGHT_OF_HEADER_BLOCK,
    width: "100%",
    marginBottom: 20,
  },
});

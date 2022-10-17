import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";

import { Pagination, TextField } from "@mui/material";

export default function EventList(props) {
  const [paginationNumber, setPaginationNumber] = React.useState(1);
  const [filterText, setFilterText] = React.useState("");

  const handlePaginationChange = (event, value) => {
    setPaginationNumber(value);
  };

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const textFilteredData = props.data.filter(
    (value) => value.indexOf(filterText) > -1
  );

  return (
    <List>
      <TextField
        value={filterText}
        onChange={handleFilterTextChange}
        size="small"
        placeholder="Type to Filter"
        fullWidth
        sx={{ mb: 1 }}
      ></TextField>
      {textFilteredData
        .filter((value, index) => {
          return (
            index >= 10 * (paginationNumber - 1) &&
            index < 10 * paginationNumber &&
            value.indexOf(filterText) > -1
          );
        })
        .map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={props.handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={props.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ wordWrap: "break-word" }}
                  id={labelId}
                  primary={value}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      <Pagination
        count={textFilteredData.length / 10}
        variant="outlined"
        page={paginationNumber}
        onChange={handlePaginationChange}
      />
    </List>
  );
}

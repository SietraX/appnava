import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  FormLabel,
  Switch,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  RadioGroup,
  Box,
  Grid,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import * as React from "react";

const ResultView = (props) => {
  const [timeInterval, setTimeInterval] = React.useState("");
  const [calculations, setCalculations] = React.useState([
    "Min",
    "Mean",
    "Max",
  ]);

  const handleIntervalChange = (event) => {
    setTimeInterval(event.target.value);
  };

  const handleSwitch = (event) => {
    const eventIndex = calculations.indexOf(event.target.value);
    if (eventIndex === -1) {
      setCalculations([...calculations, event.target.value]);
    } else {
      setCalculations([
        ...calculations.slice(0, eventIndex),
        ...calculations.slice(eventIndex + 1),
      ]);
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Paper sx={{ p: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Time Interval
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={timeInterval}
                label="Age"
                onChange={handleIntervalChange}
              >
                <MenuItem value="day">First Day</MenuItem>
                <MenuItem value="week">Last Week</MenuItem>
                <MenuItem value="month">Last Month</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mt: 4 }} component="legend">
                Calculations
              </FormLabel>
              <RadioGroup>
                <FormGroup
                  row
                  aria-labelledby="row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    checked={calculations.indexOf("Min") > -1}
                    onChange={handleSwitch}
                    control={<Switch />}
                    label="Min"
                    value="Min"
                  />
                  <FormControlLabel
                    checked={calculations.indexOf("Mean") > -1}
                    onChange={handleSwitch}
                    control={<Switch />}
                    label="Mean"
                    value="Mean"
                  />
                  <FormControlLabel
                    checked={calculations.indexOf("Max") > -1}
                    onChange={handleSwitch}
                    control={<Switch />}
                    label="Max"
                    value="Max"
                  />
                </FormGroup>
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box>iOS users</Box>
            <Box sx={{ fontSize: 34, fontWeight: "medium" }}>
              {(Math.random() * 100).toFixed(1)} K
            </Box>
            <Box
              sx={{
                color: "success.main",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              +{(Math.random() * 10).toFixed(2)}%
            </Box>
            <Box sx={{ display: "inline", fontSize: 14 }}>
              vs. last {timeInterval}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box>Android Users</Box>
            <Box sx={{ fontSize: 34, fontWeight: "medium" }}>
              {(Math.random() * 100).toFixed(1)} K
            </Box>
            <Box
              sx={{
                color: "success.main",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              +{(Math.random() * 10).toFixed(2)}%
            </Box>
            <Box sx={{ display: "inline", fontSize: 14 }}>
              vs. last {timeInterval}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box>Mobile Users</Box>
            <Box sx={{ fontSize: 34, fontWeight: "medium" }}>
              {(Math.random() * 100).toFixed(1)} K
            </Box>
            <Box
              sx={{
                color: "success.main",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              +{(Math.random() * 10).toFixed(2)}%
            </Box>
            <Box sx={{ display: "inline", fontSize: 14 }}>
              vs. last {timeInterval}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box>Tablet Users</Box>
            <Box sx={{ fontSize: 34, fontWeight: "medium" }}>
              {(Math.random() * 100).toFixed(1)} K
            </Box>
            <Box
              sx={{
                color: "error.main",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              -{(Math.random() * 10).toFixed(2)}%
            </Box>
            <Box sx={{ display: "inline", fontSize: 14 }}>
              vs. last {timeInterval}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TableContainer sx={{ mt: 2 }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <Button variant="outlined" endIcon={<DownloadIcon />}>
                      DOWNLOAD
                    </Button>
                  </TableCell>
                  <TableCell align="center">Retention</TableCell>
                  <TableCell align="center">Churn</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>User Count</TableCell>
                  <TableCell align="center">
                    {(Math.random() * 100).toFixed(0)}
                  </TableCell>
                  <TableCell align="center">
                    {(Math.random() * 100).toFixed(0)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>Events</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <TableRow
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {calculations
                        .sort((a, b) => b.localeCompare(a))
                        .map((calc) => (
                          <TableCell key={calc} sx={{ borderBottom: 0 }}>
                            {calc}
                          </TableCell>
                        ))}
                    </TableRow>
                  </TableCell>
                  <TableCell align="center">
                    <TableRow
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {calculations
                        .sort((a, b) => b.localeCompare(a))
                        .map((calc) => (
                          <TableCell key={calc} sx={{ borderBottom: 0 }}>
                            {calc}
                          </TableCell>
                        ))}
                    </TableRow>
                  </TableCell>
                </TableRow>
                {props.eventList.map((event) => (
                  <TableRow>
                    <TableCell className="cut-text">
                      {event.length > 15
                        ? `${event.substring(0, 15)}...`
                        : event}
                    </TableCell>
                    <TableCell align="center">
                      <TableRow
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {calculations
                          .sort((a, b) => b.localeCompare(a))
                          .map((calc) => (
                            <TableCell key={calc} sx={{ borderBottom: 0 }}>
                              {(Math.random() * (0.12 - 0.02) + 0.02).toFixed(
                                2
                              )}
                            </TableCell>
                          ))}
                      </TableRow>
                    </TableCell>
                    <TableCell align="center">
                      <TableRow
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {calculations
                          .sort((a, b) => b.localeCompare(a))
                          .map((calc) => (
                            <TableCell key={calc} sx={{ borderBottom: 0 }}>
                              {(Math.random() * (0.12 - 0.02) + 0.02).toFixed(
                                2
                              )}
                            </TableCell>
                          ))}
                      </TableRow>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResultView;

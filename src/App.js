import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  Grid,
  Divider,
  Card,
  CardHeader,
  Checkbox,
  IconButton,
  useTheme,
} from "@mui/material";
import EventList from "./components/EventList";
import * as React from "react";
import { mockData } from "./data/mockData";
import { Container } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import ResultView from "./components/ResultView";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const data = mockData.events.split(",");

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (data) => intersection(checked, data).length;

  const handleToggleAll = (data) => () => {
    if (numberOfChecked(data) === data.length) {
      setChecked(not(checked, data));
    } else {
      setChecked(union(checked, data));
    }
  };

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div className="App">
      <CssBaseline />
      <Container sx={{ mt: 4 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={4}>
            <Card>
              <CardHeader
                sx={{ px: 2, py: 1 }}
                avatar={
                  <Checkbox
                    onClick={handleToggleAll(data)}
                    checked={
                      numberOfChecked(data) === data.length && data.length !== 0
                    }
                    indeterminate={
                      numberOfChecked(data) !== data.length &&
                      numberOfChecked(data) !== 0
                    }
                    disabled={data.length === 0}
                    inputProps={{
                      "aria-label": "all events are selected",
                    }}
                  />
                }
                title="Events"
                subheader={`${numberOfChecked(data)}/${data.length} selected`}
                action={
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                  >
                    {theme.palette.mode === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )}
                  </IconButton>
                }
              />
              <Divider />
              <EventList
                handleToggle={handleToggle}
                checked={checked}
                data={data}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <ResultView eventList={checked} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

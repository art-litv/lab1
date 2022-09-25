import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import theme from "../src/theme";

const PERSONAL_INFO_ITEMS = [
  {
    name: "Group",
    value: "KP-02",
  },
  {
    name: "Full name",
    value: (
      <>
        Litvinenko Artem Serhiyovich
        <br />
        <span style={{ display: "flex", gap: 8, marginTop: 2 }}>
          <Image width={20} height={20} alt="UA" src="/images/ua.png" />
          Литвиненко Артем Сергійович
        </span>
      </>
    ),
  },
  {
    name: "Description",
    value: (
      <>
        {"I'm a Front-End Engineer."} <br /> Want to know more? Go on - scroll
        the page down
      </>
    ),
  },
];

const PROJECT_ITEMS = [
  {
    name: "📊 Web analytics dashboard",
    value:
      "A dashboard for web analytics, provided with multiple, highly configurable charts, allowing grouping/slicing the data by time periods",
  },
  {
    name: "📝 Spreadsheets",
    value:
      "Developed spreadsheets allowing changing the data on website through dashboard (basically CRM-like)",
  },
  {
    name: "🗃️ Kanban board",
    value:
      "Implemented UI and algorithm for saving cards (tickets) order on server (avoided cards index rearragnement, which could be bad in terms of having to do many requests)",
  },
  {
    name: "📈 Dynamic crypto-charts",
    value:
      "Developed dynamic crypto-charts through web-socket protocol, optimized the interface to work smoothly according to the frequent rerenders",
  },
];

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Box>
            <Typography
              sx={{
                fontSize: "3.75rem",
                fontWeight: 600,
                lineHeight: 1.2,
                mb: 2,
              }}
              component="h1"
              color="primary"
            >
              Welcome
              <br />
              <span style={{ color: "initial" }}>to my personal webpage</span>
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ fontSize: "2rem", opacity: 0.9 }}
            component="h2"
          >
            {"I'm Artem and going to tell you 'bout me"}
          </Typography>
        </Box>
        <Image
          alt="Waving hand"
          width={425}
          height={425}
          src="/images/waving-hand.webp"
        />
      </Box>
      <Box
        sx={{
          p: theme.spacing(8, 0),
          display: "flex",
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt="Question mark"
          width={700}
          height={700}
          src="/images/question-mark.webp"
        />
        <Box>
          <Typography
            component="h1"
            color="primary"
            sx={{ fontSize: "3.5rem", fontWeight: 600, lineHeight: 1.2 }}
          >
            Who
            <span style={{ color: "initial" }}> am I and what I am doing?</span>
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
            }}
          >
            {PERSONAL_INFO_ITEMS.map(({ name, value }) => (
              <ListItem key={name + value} disableGutters>
                {/*<ListItemIcon>Full name</ListItemIcon>*/}
                <ListItemText
                  primary={<span style={{ fontSize: "1.25rem" }}>{name}</span>}
                  secondary={<span style={{ fontSize: "1rem" }}>{value}</span>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          p: theme.spacing(8, 0),
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "50%" }}>
          <Typography
            component="h1"
            color="primary"
            sx={{ fontSize: "3.5rem", fontWeight: 600, lineHeight: 1.2 }}
          >
            Expectations
            <span style={{ color: "initial" }}> on passing the course</span>
          </Typography>
          <article style={{ marginTop: 8, opacity: 0.9, fontSize: "1.25rem" }}>
            <p>
              I expect get familiarized with Back-End 🦾 (Node.js & TypeScript),
              including such architectural patterns as MVC, Layer architecture,
              microservises, etc.
            </p>
            <p>
              On the Front-End 😎 - websocket protocol-based applications. Would
              be also cool to get on good terms with Angular
            </p>
          </article>
        </Box>
        <Image
          alt="Star eyes"
          width={350}
          height={350}
          src="/images/star-struck.webp"
        />
      </Box>
      <Box
        sx={{
          p: theme.spacing(8, 0),
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt="Cool"
          width={350}
          height={350}
          src="/images/sunglasses.webp"
        />
        <Box sx={{ maxWidth: "50%" }}>
          <Typography
            component="h1"
            color="primary"
            sx={{ fontSize: "3.5rem", fontWeight: 600, lineHeight: 1.2 }}
          >
            Experience
            <span style={{ color: "initial" }}> of mine</span>
          </Typography>
          <Typography sx={{ fontSize: "2rem", lineHeight: 1.2, mt: 1 }}>
            I have a rich Front-End experience of developing complex features.
            <br />
            Some of them are:
          </Typography>
          <List
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {PROJECT_ITEMS.map(({ name, value }) => (
              <ListItem
                sx={{ width: "45%", alignItems: "flex-start", marginRight: 3 }}
                key={name + value}
                disableGutters
              >
                {/*<ListItemIcon>Full name</ListItemIcon>*/}
                <ListItemText
                  primary={<span style={{ fontSize: "1.25rem" }}>{name}</span>}
                  secondary={<span style={{ fontSize: "1rem" }}>{value}</span>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          p: theme.spacing(18, 0),
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          component="h1"
          color="primary"
          sx={{ fontSize: "3.5rem", fontWeight: 600, lineHeight: 1.2 }}
        >
          Thank
          <span style={{ color: "initial" }}> you for checking out</span>
        </Typography>
        <Typography
          sx={{
            fontSize: "2rem",
            lineHeight: 1.2,
            textAlign: "center",
            maxWidth: 700,
            opacity: 0.8,
          }}
        >
          {`P.S. The codebase of this page is a complete mess, but for the time
          being I'll let it be 🙃`}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;

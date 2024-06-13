import React from "react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import {
  Text,
  PersonaInitialsColor,
  PersonaSize,
  Persona,
  getTheme,
  mergeStyleSets,
  Stack,
} from "@fluentui/react";
import "./App.css";
import { user } from "./ourObjects";

function App() {
  const theme = getTheme();
  const styles = mergeStyleSets({
    sectionContainer: {
      boxShadow:
        "0 1.6px 3.6px 0 rgba(0,0,0,.132),0 .3px .9px 0 rgba(0,0,0,.108)",
      borderRadius: "2px",
    },
    sectionHeader: {
      height: "45px",
      padding: "28px",
      textAlign: "left",
    },
    sectionBody: {
      padding: "28px",
      width: "900px",
    },
  });
  return (
    <>
      <Stack className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <Text variant="xxLarge" className={theme.palette.white}>
            {"Perfil de usuario"}
          </Text>
        </div>
        <div className={styles.sectionBody}>
          {/* <div>
            <Text variant="medium" className={theme.palette.neutralPrimary}>
              Usuario{user.name.value}
            </Text>
            <Text variant="small" className={theme.palette.neutralSecondary}>
              Nombre{user.email.value}
            </Text>
          </div> */}
          <Persona
            initialsColor={PersonaInitialsColor.blue}
            imageUrl="url_for_image"
            text={""}
            size={PersonaSize.size40}
            coinSize={140}
          />
        </div>
      </Stack>
    </>
  );
}

export default App;

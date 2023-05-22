import { ThemeContext } from "@/store/themeContext";
import { ThemeProvider } from "@emotion/react";
import { Pagination, createTheme } from "@mui/material";
import { useContext } from "react";

type propsType = {
  currentPage: number;
  totalPages: number;
  handlerChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const Paginator = ({
  currentPage,
  totalPages,
  handlerChangePage,
}: propsType) => {

  // geting global theme
  const { theme } = useContext(ThemeContext);

  // sets theme for paginator
  const themePaginator = createTheme({
    palette: {
      ...(theme === "dark"
        ? {
            primary: {
              main: "#977EF2",
              contrastText: "#fff",
            },
            text: {
              primary: "white",
            },
          }
        : {
            primary: {
              main: "#977EF2",
              contrastText: "#fff",
            },
            text: {
              primary: "black",
            },
          }),
    },
  });

  return (
    <div className="flex justify-center items-center p-5">
      <ThemeProvider theme={themePaginator}>
        <Pagination
          color="primary"
          page={Number(currentPage)}
          count={totalPages}
          defaultPage={1}
          onChange={handlerChangePage}
        />
      </ThemeProvider>
    </div>
  );
};

export default Paginator;

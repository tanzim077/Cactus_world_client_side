/*
 * Filename: /home/tanzim/WorkStation/cactus-world-front/componenets/Layout/Layout.jsx
 * Path: /home/tanzim/WorkStation/cactus-world-front
 * Created Date: Tuesday, January 31st 2023, 9:43:53 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import CustomAppBar from "../Appbar/Appbar";

const Layout = ({ children }) => {
  return (
    <>
      <CustomAppBar />
      {children}
    </>
  );
};

export default Layout;

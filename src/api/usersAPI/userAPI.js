/*
 * File           : userAPI.js
 * Project        : world-of-catus-client-side
 * Created Date   : Su 09 Jul 2023 02:41:24
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sun Jul 09 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://localhost:8080/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const SignUpAPI = (user) => userAPI.post("/signup", user);
// export const updateUser = (user) => userAPI.put("/update", user);
// export const deleteUser = (user) => userAPI.delete("/delete", user);

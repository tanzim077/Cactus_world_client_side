/*
 * Filename: /home/tanzim/WorkStation/showcase project/cactus-world/frontend/Cactus_world_client_side/src/features/store/store.jsx
 * Path: /home/tanzim/WorkStation/showcase project/cactus-world/frontend/Cactus_world_client_side
 * Created Date: Sunday, July 9th 2023, 2:35:20 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

// src/store.ts
import { configureStore } from "@reduxjs/toolkit";

// just nu tom reducer, du kan lägga till dina slices här senare
export const store = configureStore({
  reducer: {},
});

// typer för TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

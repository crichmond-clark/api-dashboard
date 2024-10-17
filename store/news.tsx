import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NewsState {}

const useNewsStore = create<NewsState>()(
  devtools(
    persist((set) => ({}), {
      name: "bear-storage",
    })
  )
);

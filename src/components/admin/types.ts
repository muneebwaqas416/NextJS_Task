import { Post } from "@/types";

export interface PostFormProps {
    post?: Post | null;
    onClose: () => void;
  }
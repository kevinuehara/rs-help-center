import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useListData() {
  return useQuery({
    queryKey: ["user-list"],
    queryFn: async () => {
      const response = await fetch(`/api/user`);
      const { data } = await response.json();
      return data as User[];
    },
  });
}

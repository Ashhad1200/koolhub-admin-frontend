import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";


export const useFeeCount = ({ date }) =>
  useQuery({
      queryKey: ["FeeCount", date],
      queryFn: async () => dashboardServices.fetchFeeCount(date),
  });

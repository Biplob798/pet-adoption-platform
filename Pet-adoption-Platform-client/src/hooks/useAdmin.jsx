import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user,loading } = useAuth()
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled:!loading,
    queryFn: async () => {
      console.log("checking is admin ", user);
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
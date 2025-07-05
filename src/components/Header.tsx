import { getUser } from "@/utils/supabase/server";
import HeaderClient from "./HeaderClient";

const Header = async () => {
  const user = await getUser();

  return <HeaderClient user={user} />;
};

export default Header;

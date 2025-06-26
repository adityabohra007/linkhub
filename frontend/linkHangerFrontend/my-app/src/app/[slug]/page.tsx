"use client";
import { useParams } from "next/navigation";
import styled from "styled-components";
// import "./index.css";

import { useFetchUserQuery } from "../../api/linkHanger";
import UserLink from "@/components/UserLink";

const Page = () => {
  const { slug } = useParams() as { slug: string };
  return <UserLink username={slug} />;
};
export default Page;

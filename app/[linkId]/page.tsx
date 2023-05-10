import { PrismaClient } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function Page(props: { params: { linkId: string } }) {
  const { linkId } = props.params;
  const url = await prisma.link.findMany({ where: { linkId } });

  if (url.length !== 0) {
    return redirect(url[0].url);
  } else {
    return notFound();
  }
}

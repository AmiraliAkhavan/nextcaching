import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
import { connection } from "next/server";

// export const revalidate = 5;
// export const dynamic = "force-dynamic"; // same as cache:no-store

export default async function MessagesPage() {
  // await connection();
  // const response = await fetch(
  // "http://localhost:8080/messages"
  // , {
  // next: {
  //   revalidate: 3,
  // },
  // cache: "no-store", nextjs 15 default
  // }
  // );

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}

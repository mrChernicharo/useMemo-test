import Head from "next/head";
import Postlist from "../components/Postlist";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Hello use Memo</h1>
      <Postlist />
    </div>
  );
}

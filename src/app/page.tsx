import styles from "./page.module.css";
import Icon from "../components/icon";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Lordicon with Next.js
        </h1>
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              <Icon />
            </td>
            <td>
              <p>Click icon to play animation again.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

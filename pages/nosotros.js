import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";
export default function Nosotros() {
  return (
    <>
      <Layout title={"Nosotros"} description={"GuitarLA- Sobre Nosotros"}>
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              alt="Imagen sobre nosotros"
              width={1000}
              height={800}
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur necessitatibus fuga molestias voluptates recusandae
                repellendus minus eos exercitationem, ut qui non. Sequi dolorem
                repudiandae magni consectetur aperiam nemo, nesciunt quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                ex. Explicabo nisi delectus quod eius alias iure, voluptatum
                officiis sapiente, tempora magnam deserunt vero ab rem, quam
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                ex. Explicabo nisi delectus quod eius alias iure, voluptatum
                officiis sapiente, tempora magnam deserunt vero ab rem, quam
                recusandae similique harum? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iusto, ex. Explicabo nisi delectus
                quod eius alias iure, voluptatum officiis sapie
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

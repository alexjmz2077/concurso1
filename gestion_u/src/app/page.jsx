import Image from "next/image";
import Link from "next/link";
import Lab from './laboratorios/laboratorios'

export default function Home() {
  return (
    <main className="mt-8 mr-16 ml-16">
      <section className="flex flex-row justify-between">
        <section className="flex flex-col bg-white">
          <p> UNIVERSITY </p>
          <div className="flex flex-row">
            <img src=""/>
            <p>Home</p>
          </div>
          <div className="flex flex-row">
            <img src=""/>
            <p> Laboratorios </p>
          </div>
          <div className="flex flex-row">
            <img src=""/>
            <p>Reservas</p>
          </div>
        </section>

        <section className="flex flex-col ">
          <section className="flex flex-row gap-10">
            <button className="bg-blue-950 text-white p-10 pt-4 pb-4">
              <Link href={"/register"}>
                Register
              </Link>
            </button>

            <button className="bg-blue-950 text-white p-10 pt-4 pb-4">
              <Link href={"/login"}>
                Iniciar Sesión
              </Link>
            </button>
          </section>

          <img src=""/>

        </section>
      </section>

      



    </main>
  );
}

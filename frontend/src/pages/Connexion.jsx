import NavBar from "../components/NavBar";

export default function Connexion() {
  return (
    <div className="Connexion bg-wallpaper bg-no-repeat bg-cover h-screen">
      <NavBar />
      <br />
      <h1 className="font-titles text-center text-3xl">Connectez vous : </h1>
      <br />
      <div className="w-full flex justify-center">
        <form action="">
          <label htmlFor="login" className="block font-texts">
            Login :{" "}
          </label>
          <input
            id="login"
            className="border border-zinc-800 rounded p-1"
            type="text"
            placeholder="Nom d'utilisateur..."
            required
          />
          <br />
          <br />
          <label htmlFor="password" className="block font-texts">
            Mot de passe :{" "}
          </label>
          <input
            id="password"
            className="border border-zinc-800 rounded p-1"
            type="password"
            placeholder="Mot de passe..."
            required
          />
          <br />
          <div className="flex justify-center items-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-br from-[#884A39] to-[#C38154] p-2 rounded-lg border-2 border-zinc-800"
            >
              Se Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

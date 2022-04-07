import Image from "next/image";
import imageLoader from "../../imageLoader";
import { Character, GetCharacterResults } from "../../types";

function CharacterPage({ character }: { character: Character }) {
  return (
    <div>
      <h1>{character.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200px"
        height="200px"
      />
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await response.json();

  return {
    paths: results.map((character) => {
      return { params: { id: String(character.id) } };
    }),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await response.json();

  return {
    props: {
      character
    }
  };
}

export default CharacterPage;

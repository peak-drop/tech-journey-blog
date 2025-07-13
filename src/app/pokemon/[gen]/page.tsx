import {getPostData} from "@/lib/posts";
import {fetchGenerations, fetchPokemonByGen} from "@/lib/pokeapi";
import invariant from "tiny-invariant";
import Pokemon from "@/components/Pokemon";

type Props = {
  params: Promise<{
    gen: string
  }>
}

export default async function PokemonGenPage(props: Props) {
  const gen = Number((await props.params).gen);
  const generations = await fetchGenerations()
  const validGenerations = generations.generations.map(x => x.id);
  invariant(validGenerations.includes(gen), `Generation ${gen} is invalid`)
  const pokemon = await fetchPokemonByGen(gen)

  return (
      <div>
        <ul className={'flex items-center justify-center flex-wrap mx-4'}>
          {pokemon.pokemon.map(p => {
            return (
                <li key={p.id}>
                  <Pokemon pokemon={p}/>
                </li>
            )
          })}
        </ul>
      </div>
  )
}

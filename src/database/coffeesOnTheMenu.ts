import { CoffeeType } from '../pages/Home/components/Card'

import tradicional from '../assets/coffees/tradicional.png'
import american from '../assets/coffees/american.png'
import cream from '../assets/coffees/cream.png'
import ice from '../assets/coffees/ice.png'
import cafeComLeite from '../assets/coffees/com-leite.png'
import latte from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import mochaccino from '../assets/coffees/mochaccino.png'
import chocolateQuente from '../assets/coffees/chocolate-quente.png'
import cubano from '../assets/coffees/cubano.png'
import havaiano from '../assets/coffees/havaiano.png'
import arabe from '../assets/coffees/arabe.png'
import irlandes from '../assets/coffees/irlandes.png'

export const coffeesOnTheMenu: CoffeeType[] = [
  {
    id: 1,
    coffeeImageUrl: tradicional,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: 2,
    coffeeImageUrl: american,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: 3,
    coffeeImageUrl: cream,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: 4,
    coffeeImageUrl: ice,
    tags: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'GELADO',
      },
    ],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    id: 5,
    coffeeImageUrl: cafeComLeite,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'com leite',
      },
    ],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: 6,
    coffeeImageUrl: latte,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'com leite',
      },
    ],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    id: 7,
    coffeeImageUrl: capuccino,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'com leite',
      },
    ],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: 8,
    coffeeImageUrl: macchiato,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'com leite',
      },
    ],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
  {
    id: 9,
    coffeeImageUrl: mochaccino,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'com leite',
      },
    ],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    id: 10,
    coffeeImageUrl: chocolateQuente,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'com leite',
      },
    ],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    id: 11,
    coffeeImageUrl: cubano,
    tags: [
      {
        id: 1,
        name: 'especial',
      },
      {
        id: 2,
        name: 'alcoólico',
      },
      {
        id: 3,
        name: 'gelado',
      },
    ],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    id: 12,
    coffeeImageUrl: havaiano,
    tags: [
      {
        id: 1,
        name: 'especial',
      },
    ],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    id: 13,
    coffeeImageUrl: arabe,
    tags: [
      {
        id: 1,
        name: 'especial',
      },
    ],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    id: 14,
    coffeeImageUrl: irlandes,
    tags: [
      {
        id: 1,
        name: 'especial',
      },
      {
        id: 2,
        name: 'alcoólico',
      },
    ],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]
